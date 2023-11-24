import React from "react";
import {
  recognitionIcon,
  recordsIcon,
  customizableIcon,
} from "./imageComponent";

const AspectBox = ({ aspectLabel, details, imgUrl }) => {
  return (
    <div className="Aspect-box bg-white px-6 pb-4 rounded-lg px-auto flex flex-col mob:items-center">
      <div className="StatImage flex items-center justify-center bg-stats-logo w-[80px] h-[80px] rounded-full translate-y-[-50%] desktop:ml-2">
        <img
          src={imgUrl}
          className="w-[40px] h-[40px]"
          alt={aspectLabel + " logo"}
        />
      </div>

      <p className="font-bold text-[20px] text-large-text">{aspectLabel}</p>
      <p className="pt-2 pb-4 text-[15px] text-small-text">{details}</p>
    </div>
  );
};

const StatisticContainer = () => {
  return (
    <>
      <div className="flex flex-col text-center desktop:py-16">
        <p className="font-bold text-[48px] text-large-text mob:text-[32px]">
          Advanced Statistics
        </p>
        <p className="text-[16px] text-Grayish-Violet desktop:px-[275px] mob:pb-8">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div>
        <div className="flex relative items-center justify-center py-16 pb-32 mob:pb-24 ">
          {/* line */}
          <div className="desktop-only bg-grid-line h-[8px] w-[75%] absolute" />
          <div className="mobile-only bg-grid-line h-[75%] w-[8px] absolute" />
          <div id="statistic-grid" className="z-10">
            <AspectBox
              imgUrl={recognitionIcon}
              aspectLabel="Brand Recognition"
              details="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
            />
            <AspectBox
              imgUrl={recordsIcon}
              aspectLabel="Detailed Records"
              details="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.
"
            />
            <AspectBox
              imgUrl={customizableIcon}
              aspectLabel="Fully Customizable"
              details="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticContainer;
