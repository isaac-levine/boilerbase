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

// Get the subscription level of the current user (free, hacker, founder, pro)
export async function getSubscriptionLevel() {
  const session = await getServerSession(authOptions);

  if (session) {
    const user = await prisma.user.findFirst({
      where: { email: session.user?.email },
    });

    if (!user?.stripe_customer_id) {
      return "Free";
    }

    const subscriptions = await stripe.subscriptions.list({
      customer: String(user.stripe_customer_id),
    });

    if (subscriptions.data.length > 0) {
      const productID = subscriptions.data[0].items.data[0].price.product;

      // Fetch the product details using the product ID
      const product = await stripe.products.retrieve(productID + "");
      return product.name;
    }
  }

  return "Free";
}

export async function createHackerCheckoutLink(customer: string) {
  if (!customer) {
    return;
  }
  const checkout = await stripe.checkout.sessions.create({
    success_url: process.env.NEXTAUTH_URL + "/dashboard",
    cancel_url: process.env.NEXTAUTH_URL + "",
    customer: customer,
    line_items: [
      {
        price: process.env.STRIPE_HACKER_PRICE,
        quantity: 1,
      },
    ],
    mode: "subscription",
    allow_promotion_codes: true,
  });

  return checkout.url;
}

export async function createFounderCheckoutLink(customer: string) {
  if (!customer) {
    return;
  }
  const checkout = await stripe.checkout.sessions.create({
    success_url: process.env.NEXTAUTH_URL + "/dashboard",
    cancel_url: process.env.NEXTAUTH_URL + "",
    customer: customer,
    line_items: [
      {
        price: process.env.STRIPE_FOUNDER_PRICE,
        quantity: 1,
      },
    ],
    mode: "subscription",
    allow_promotion_codes: true,
  });

  return checkout.url;
}

export async function createProCheckoutLink(customer: string) {
  if (!customer) {
    return;
  }
  const checkout = await stripe.checkout.sessions.create({
    success_url: process.env.NEXTAUTH_URL + "/dashboard",
    cancel_url: process.env.NEXTAUTH_URL + "",
    customer: customer,
    line_items: [
      {
        price: process.env.STRIPE_PRO_PRICE,
        quantity: 1,
      },
    ],
    mode: "subscription",
    allow_promotion_codes: true,
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
      return_url: process.env.NEXTAUTH_URL + "/settings",
    });

    console.log();

    return portalSession.url;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

// Create a new Stripe customer if one doesn't already exist for this user
export async function createCustomerIfNull() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) {
      console.error("Session not found or user email is missing");
      return;
    }
    console.log("Creating stripe_customer_id for user", session.user.email);
    const user = await prisma.user.findFirst({
      where: { email: session.user.email },
    });

    if (!user) {
      console.error("User not found with email:", session.user.email);
      return;
    }

    // User doesn't already have a stripe_customer_id, so create one
    if (!user?.stripe_customer_id) {
      const customer = await stripe.customers.create({
        email: String(user?.email),
      });
      console.log(
        "created stripe customer",
        customer.id,
        "for user",
        user?.email
      );

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          stripe_customer_id: customer.id,
        },
      });
      console.log("updated user with stripe_customer_id", customer.id);
    } else {
      console.log(
        "User already has a stripe_customer_id:",
        user.stripe_customer_id
      );
    }
    return user?.stripe_customer_id;
  } catch (error) {
    console.error("Failed to create or update Stripe customer:", error);
    throw error;
  }
}
