import React from "react";

type StatsCardPropsType = {
  title: string;
  descp: string;
};

const StatsCard = ({ title, descp }: StatsCardPropsType) => {
  return (
    <div className="flex flex-col gap-2 md:min-w-[344px]">
      <h4 className="textS font-medium grayDark">{title}</h4>
      <p className="textBase font-medium gray24">{descp}</p>
    </div>
  );
};

export default StatsCard;
