import React from "react";

const ShortenItBar = () => {
  return (
    <div className="relative flex items-center gap-4 h-[150px] rounded-[16px] translate-y-[-50%] overflow-hidden">
      <img
        src="../../resources/images/bg-shorten-desktop.svg"
        className="bg-shorten-link-box absolute"
      />
      <input
        type="input"
        className="z-10 h-[60px] w-[100%] ml-10 pl-4 rounded-[16px]"
        placeholder="Shorten a link here..."
        value=""
      />
      <input
        type="button"
        className="py-2 px-6 text-white bg-sing-up hover:bg-sing-up-hover z-10 mr-10 h-[60px] rounded-[16px]"
        value="Shorten It!"
      />
    </div>
  );
};

export default ShortenItBar;
