import { authOptions } from "@/lib/auth/options";
import { getServerSession } from "next-auth";
import Stripe from "stripe";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";

export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
  apiVersion: "2022-11-15",
});

export async function hasSubscription() {
  const session = await getServerSession(authOptions);

  if (session) {
    const user = await prisma.user.findFirst({
      where: { email: session.user?.email },
    });

    if (!user?.stripe_customer_id) {
      return false;
    }

    const subscriptions = await stripe.subscriptions.list({
      customer: String(user.stripe_customer_id),
    });

    return subscriptions.data.length > 0;
  }

  return false;
}

export async function createHackerCheckoutLink(customer: string) {
  if (!customer) {
    return;
  }
  const checkout = await stripe.checkout.sessions.create({
    success_url: process.env.NEXTAUTH_URL + "/dashboard",
    cancel_url: process.env.NEXTAUTH_URL + "/dashboard",
    customer: customer,
    line_items: [
      {
        price: process.env.STRIPE_HACKER_PRICE,
        quantity: 1,
      },
    ],
    mode: "subscription",
  });

  return checkout.url;
}

export async function createFounderCheckoutLink(customer: string) {
  if (!customer) {
    return;
  }
  const checkout = await stripe.checkout.sessions.create({
    success_url: process.env.NEXTAUTH_URL + "/dashboard",
    cancel_url: process.env.NEXTAUTH_URL + "/dashboard",
    customer: customer,
    line_items: [
      {
        price: process.env.STRIPE_FOUNDER_PRICE,
        quantity: 1,
      },
    ],
    mode: "subscription",
  });

  return checkout.url;
}

export async function createProCheckoutLink(customer: string) {
  if (!customer) {
    return;
  }
  const checkout = await stripe.checkout.sessions.create({
    success_url: process.env.NEXTAUTH_URL + "/dashboard",
    cancel_url: process.env.NEXTAUTH_URL + "/dashboard",
    customer: customer,
    line_items: [
      {
        price: process.env.STRIPE_PRO_PRICE,
        quantity: 1,
      },
    ],
    mode: "subscription",
  });

  return checkout.url;
}

export async function generateCustomerPortalLink(customerId: string) {
  if (!customerId) {
    return;
  }
  console.log("generating custom portal link for customer", customerId);
  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: process.env.NEXTAUTH_URL + "/dashboard",
    });

    console.log();

    return portalSession.url;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function createCustomerIfNull() {
  const session = await getServerSession(authOptions);
  console.log("creating stripe_customer_id for user", session?.user?.email);
  if (session) {
    const user = await prisma.user.findFirst({
      where: { email: session.user?.email },
    });

    if (!user?.stripe_customer_id) {
      const customer = await stripe.customers.create({
        email: String(user?.email),
      });
      console.log(
        "created Stripe customer",
        customer.id,
        "for user",
        user?.email
      );

      await prisma.user.update({
        where: {
          id: user?.id,
        },
        data: {
          stripe_customer_id: customer.id,
        },
      });
      console.log("updated user with stripe_customer_id", customer.id);
    }
    return user?.stripe_customer_id;
  }
}
