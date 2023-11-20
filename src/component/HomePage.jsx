import React from "react";
import Navigation from "./Navigation";
import PageIntro from "./PageIntro";
import StatisticContainer from "./StatisticsContainer";
import ShortenItBar from "./ShortenItBar";

const HomePage = () => {
  return (
    <>
      {/* container */}
      <div className="center-web pt-10 bg-gray-100 w-full ">
        <div className="section-container">
          <Navigation />
          <PageIntro />
        </div>
      </div>
      <div className=" center-web bg-gray-300 w-full">
        <div className="section-container">
          <ShortenItBar />
          <StatisticContainer />
        </div>
      </div>
      <div className=" center-web bg-gray-100 w-full h-[200px]">
        <div className="section-container flex flex-col align-middle "></div>
      </div>
      <div className=" center-web bg-gray-300 w-full h-[200px]">
        <div className="section-container">{/*  */}</div>
      </div>
    </>
  );
};

export default HomePage;
