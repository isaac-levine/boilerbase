import Image from "next/image";

interface BoilerbaseIconBlocksProps {
  size: number;
}

const BoilerbaseIconBlocks: React.FC<BoilerbaseIconBlocksProps> = ({
  size,
}) => {
  return (
    <div>
      <Image
        src="/boilerbase-icon-transparent.png"
        alt="Boilerbase Icon"
        width={size}
        height={size}
        className="invert dark:invert-0 hidden lg:block"
      />
    </div>
  );
};

export default BoilerbaseIconBlocks;
