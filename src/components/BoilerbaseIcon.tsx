import Image from "next/image";

interface BoilerbaseIconProps {
  size: number;
}

const BoilerbaseIcon: React.FC<BoilerbaseIconProps> = ({ size }) => {
  return (
    <div>
      <Image
        src="/boilerbase-icon.png"
        alt="Boilerbase Icon"
        width={size}
        height={size}
        className="dark:invert"
      />
    </div>
  );
};

export default BoilerbaseIcon;
