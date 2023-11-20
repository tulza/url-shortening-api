import React from "react";

const DockBottom = () => {
  return (
    <div className="flex justify-center py-8 flex-col items-center relative w-full overflow-hidden">
      <img
        src="/images/bg-shorten-desktop.svg"
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
