import React from "react";
import boostDesktopSvg from "/images/bg-boost-desktop.svg";
import boostMobileSvg from "/images/bg-boost-mobile.svg";

const DockBottom = () => {
  return (
    <div className="flex justify-center py-8 flex-col items-center relative w-full overflow-hidden">
      <img
        src={boostDesktopSvg}
        className="desktop-only bg-shorten-link-box h-full w-full absolute"
        alt="boost background image"
      />
      <img
        src={boostMobileSvg}
        className="mobile-only bg-shorten-link-box h-full w-full absolute"
        alt="boost background image"
      />
      <p className="z-10 text-white font-bold text-[40px] mob:text-[24px] py-4">
        Boost your links today
      </p>
      <button className="button z-10 mob:text-[16px]">Get Started</button>
    </div>
  );
};

export default DockBottom;
