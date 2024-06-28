import Image from "next/image";
import React from "react";

type InfoCardPropsType = {
  icon: string;
  iconAlt: string;
  text: string;
  value: number;
  space: "small" | "large";
};

const InfoCard = ({ icon, iconAlt, text, value, space }: InfoCardPropsType) => {
  return (
    <div className="flex justify-between items-center">
      <div
        className={`flex items-center p-2.5 ${
          space === "large" ? "gap-2.5" : "gap-2"
        }`}
      >
        <Image src={icon} alt={iconAlt} height={20} width={20} />
        <div className="textBase font-medium text-[#4F4F4F]">{text}</div>
      </div>
      <div className="font-semibold textLg gray24 pl-2.5 py-1.5 min-w-[57px]">
        {value}
      </div>
    </div>
  );
};

export default InfoCard;
