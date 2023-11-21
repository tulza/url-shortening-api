import React from "react";
import boostSvg from "/images/bg-boost-desktop.svg";

const DockBottom = () => {
  return (
    <div className="flex justify-center py-8 flex-col items-center relative w-full overflow-hidden">
      <img
        src={boostSvg}
        className="bg-shorten-link-box h-full w-full absolute"
      />
      <p className="z-10 text-white font-bold text-[40px] py-4">
        Boost your links today
      </p>
      <button className="button z-10">Get Started</button>
    </div>
  );
};

export default DockBottom;
