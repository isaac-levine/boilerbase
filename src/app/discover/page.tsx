/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j2OGqzBR0CU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import "./styles.css";
import { Button } from "@/components/ui/button";
import FilterButton from "./FilterButton";

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 my-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">
          Discover the latest templates and boilerplates
        </h1>
        <div className="flex items-center space-x-4">
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Search boilerplates..."
              type="text"
            />
          </div>
          <FilterButton />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <img
            alt="Boilerplate Thumbnail"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Boilerplate Title</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              A brief description of the boilerplate.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-semibold">$19.99</span>
              <Button size="lg">Buy Now</Button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <img
            alt="Boilerplate Thumbnail"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Boilerplate Title</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              A brief description of the boilerplate.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-semibold">$24.99</span>
              <Button size="sm">Buy Now</Button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <img
            alt="Boilerplate Thumbnail"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Boilerplate Title</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              A brief description of the boilerplate.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-semibold">$14.99</span>
              <Button size="sm">Buy Now</Button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <img
            alt="Boilerplate Thumbnail"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Boilerplate Title</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              A brief description of the boilerplate.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-semibold">$29.99</span>
              <Button size="sm">Buy Now</Button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <img
            alt="Boilerplate Thumbnail"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Boilerplate Title</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              A brief description of the boilerplate.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-semibold">$39.99</span>
              <Button size="sm">Buy Now</Button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <img
            alt="Boilerplate Thumbnail"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Boilerplate Title</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              A brief description of the boilerplate.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-semibold">$9.99</span>
              <Button size="sm">Buy Now</Button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <img
            alt="Boilerplate Thumbnail"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Boilerplate Title</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              A brief description of the boilerplate.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-semibold">$34.99</span>
              <Button size="sm">Buy Now</Button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <img
            alt="Boilerplate Thumbnail"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Boilerplate Title</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              A brief description of the boilerplate.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-semibold">$44.99</span>
              <Button size="sm">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
