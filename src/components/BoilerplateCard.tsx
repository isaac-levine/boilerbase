import Link from "next/link";
import { Listing } from "@prisma/client";
import { truncateString } from "@/lib/utils";

interface BoilerplateCardProps {
  listing: Listing;
}

const BoilerplateCard: React.FC<BoilerplateCardProps> = ({ listing }) => {
  return (
    <Link
      href={`/dashboard/boilerplates/${listing.id}`}
      key={listing.id}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer flex flex-col justify-between p-2 bg-background dark:bg-foreground/5 backdrop-blur-md flex-grow-0 border-t border-foreground/10"
    >
      <div className="flex flex-col justify-between flex-grow p-4">
        <h3 className="text-lg font-semibold mb-2">{listing.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          {truncateString(listing.description, 100)}
        </p>
        <div className="flex items-center justify-between">
          {/* Additional content can go here */}
        </div>
      </div>
    </Link>
  );
};

export default BoilerplateCard;
