import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "lucide-react";

const faq = [
  {
    question: "Do you offer refunds?",
    answer:
      "We do not offer refunds on the first month of membership because we deliver the boilerplate code right away upon payment. However, if you are not satisfied with the product, we can offer a refund for the current month if you reach out to us within 7 days of your payment, and it is not the first month of your membership.",
  },
  {
    question: "What will I get from joining the community?",
    answer:
      "Our community is a great place to connect with other developers, share your work, and get feedback on your projects. You will also get access to exclusive content, such as tutorials, webinars, and live Q&A sessions with our team. Joining the community is a great way to stay up to date on the latest SaaS growth tactics and connect with other founders who can help you grow your business.",
  },
  {
    question: "What kind of customer support do you offer?",
    answer:
      "We are committed to providing excellent customer support to all of our users. Our team is committed to responding to all inquiries within 24 hours via email, and we have a comprehensive knowledge base with answers to common questions and issues.",
  },
  {
    question: "Do you offer any trial or demo options?",
    answer:
      "No, we currently do not offer a free trial or demo of our product. Given the nature of our product and code boilerplates, we are unable to offer a free trial or demo. Please refer to our pricing page for more information on our plans and pricing. If you have any questions or concerns, please feel free to reach out to our support team.",
  },
];

export default function FrequentlyAskedQuestionsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            {/* <p className="mt-4 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Get answers to the most common questions about our product.
            </p> */}
          </div>
          <div className="space-y-4 mx-auto py-8">
            {faq.map((item, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="flex w-full items-center justify-between px-6 py-4 text-left font-medium transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 = dark:hover:bg-gray-700  gap-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-8 transition-transform duration-200 hover:scale-105">
                  {item.question}
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pt-4 pb-6 text-gray-500 dark:text-gray-400">
                  {item.answer}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
