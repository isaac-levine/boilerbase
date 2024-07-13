/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UxkeG5Xwln0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center">
          <ThumbsUpIcon className="w-16 h-16 text-green-500 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Thank you!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We appreciate you taking the time to submit your listing. Our team
            will review it and, if approved, it will be published soon.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We&apos;re excited to have you as part of our community. If you have
            any questions or concerns, please don&apos;t hesitate to reach out.
          </p>
          <Link
            className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            href="#"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ThumbsUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
