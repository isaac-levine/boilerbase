import Image from "next/image";

const BoilerbaseIcon = () => {
  return (
    <div>
      <Image
        src="/boilerbase-icon.png"
        alt="Boilerbase Icon"
        width={35}
        height={35}
        className="dark:invert"
      />
    </div>
  );
};

export default BoilerbaseIcon;
