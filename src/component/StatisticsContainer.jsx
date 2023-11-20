import React from "react";

const AspectBox = ({ aspectLabel, details, imgUrl }) => {
  return (
    <div className="Aspect-box bg-white mx-4 px-4 pb-4 rounded-lg ">
      <div className="flex items-center justify-center bg-stats-logo w-[80px] h-[80px] rounded-full translate-y-[-50%] ml-2">
        <img src={imgUrl} className="w-[40px] h-[40px]"></img>
      </div>

      <p className="font-bold text-[20px]">{aspectLabel}</p>
      <p className="pt-2 pb-4 text-[15px]">{details}</p>
    </div>
  );
};

const StatisticContainer = () => {
  return (
    <>
      <div className="flex flex-col text-center">
        <p className="font-bold text-[48px]">Advanced Statistics</p>
        <p className="text-[16px]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div>
        <div className="flex relative items-center justify-center">
          <div className="bg-grid-line h-[8px] w-[70%] absolute" />
          <div id="statistic-grid" className="z-10">
            <AspectBox
              imgUrl="../../resources/images/icon-brand-recognition.svg"
              aspectLabel="Brand Recognition"
              details="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
            />
            <AspectBox
              imgUrl="../../resources/images/icon-detailed-records.svg"
              aspectLabel="Detailed Records"
              details="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.
"
            />
            <AspectBox
              imgUrl="../../resources/images/icon-fully-customizable.svg"
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
