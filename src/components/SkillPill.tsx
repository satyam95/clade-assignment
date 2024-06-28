import Image from "next/image";
import React from "react";

type SkillPillPropsType = {
  icon: string;
  iconAlt: string;
  text: string;
};

const SkillPill = ({ icon, iconAlt, text }: SkillPillPropsType) => {
  return (
    <div className="px-[5px] py-[3px] border border-[#D0D5DD] rounded-md w-fit">
      <div className="flex items-center gap-1">
        <Image src={icon} alt={iconAlt} width={16} height={16} />
        <div className="textXxs font-medium grayDraker">{text}</div>
      </div>
    </div>
  );
};

export default SkillPill;
