import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "lucide-react";

const faq = [
  // {
  //   question: "Is Boilerbase really free and open source?",
  //   answer:
  //     "Yes! Boilerbase is 100% open source and free to use. Our mission is to empower indie developers and the SaaS community by providing high-quality boilerplate code and tools without any cost barriers. You can find our entire codebase on GitHub and contribute to make it even better.",
  // },
  {
    question:
      "What makes Boilerbase different from other boilerplate solutions?",
    answer:
      "Boilerbase is completely free and built on transparency. Our community-driven marketplace features honest reviews, detailed ratings, and open discussions about each boilerplate. We combine powerful code generation tools with genuine user feedback, helping developers make informed decisions about the code they use.",
  },
  {
    question: "How can I contribute to Boilerbase?",
    answer:
      "There are many ways to contribute! You can submit your own boilerplates, improve existing code, report bugs, suggest features, or help with documentation. Join our GitHub discussions to connect with other contributors and see where you can make the most impact. We welcome contributors of all experience levels.",
  },
  {
    question: "How do I get help if I'm stuck?",
    answer:
      "Our community is here to help! You can ask questions in our GitHub discussions, join our Discord channel for real-time support, or browse our documentation. Since we're community-driven, experienced developers often help newcomers get started and solve problems.",
  },
  {
    question: "Can I use Boilerbase code in commercial projects?",
    answer:
      "For code generated using our tool - yes, you can use it freely in any project. For community-submitted boilerplates, you'll need to check the specific license included with each boilerplate. Each submission clearly displays its license terms to help you understand usage rights.",
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
                <CollapsibleTrigger className="flex w-full items-center justify-between px-6 py-4 text-left font-medium transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 = dark:hover:bg-gray-700  gap-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm bg-background dark:bg-foreground/5 border p-8 transition-transform duration-200 hover:scale-105">
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
