import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="shadow1">
        <div className="pt-[17px] pb-[18px] px-6 flex items-center">
          <div className="ml-4 h-[61px] w-[100px] bg-[#E7E7E7] flex justify-center items-center">
            <div className="text-xl font-bold text-[#DC4A2D] satoshiBold">
              Logo
            </div>
          </div>
          <div className="p-[7px] borderTiny rounded-[36px] flex items-center max-w-[538px] h-[74px] w-full ml-[455px] mr-[437px]">
            <button className="bg-[#DC4A2D] flex items-center justify-center gap-2 pt-[14px] pb-[13px] px-[13px] rounded-full border-2 border-[#FCB4A5] items-center max-w-[109px] w-full">
              <div className="h-6 w-6 flex justify-center items-center">
                <Image
                  src="/briefcase.svg"
                  alt="briefcase icon"
                  width={24}
                  height={24}
                />
              </div>
              <div className="textLg font-medium text-white min-w-[47px]">
                Jobs
              </div>
            </button>
            <button className="flex items-center justify-center gap-2 max-w-[128px] w-full ml-[65px] mr-[80px]">
              <div className="h-6 w-6 flex justify-center items-center relative">
                <Image
                  src="/message.svg"
                  alt="message icon"
                  width={24}
                  height={24}
                />
                <div className="bg-[#DC4A2D] h-1.5 w-1.5 rounded-full absolute top-0 right-0"></div>
              </div>
              <div className="textLg font-medium text-[#B0B0B0]">Messages</div>
            </button>
            <button className="flex items-center justify-center gap-2 max-w-[127px] w-full mr-[15px]">
              <div className="h-6 w-6 flex justify-center items-center">
                <Image
                  src="/coins.svg"
                  alt="coins icon"
                  width={24}
                  height={24}
                />
              </div>
              <div className="textLg font-medium text-[#B0B0B0]">Payments</div>
            </button>
          </div>
          <div className="p-2.5">
            <div className="flex items-center gap-4">
              <div className="relative h-8 w-8">
                <Image
                  src="/bell.svg"
                  width={32}
                  height={32}
                  alt="notification bell icon"
                />
                <div className="bg-[#DC4A2D] h-1.5 w-1.5 rounded-full absolute top-0 right-1"></div>
              </div>
              <div className="flex gap-1.5 items-center">
                <Image
                  src="/user-icon.png"
                  alt="user icon"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <Image src="/down.svg" alt="down icon" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
