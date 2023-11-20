import React from "react";
import Navigation from "./Navigation";
import PageIntro from "./PageIntro";
import StatisticContainer from "./StatisticsContainer";
import ShortenItBar from "./ShortenItBar";
import DockBottom from "./DockBottom";
import FooterLinks from "./FooterLinks";

const HomePage = () => {
  return (
    <>
      {/* container */}
      <div className="center-web pt-10 bg-white w-full ">
        <div className="section-container">
          <Navigation />
          <PageIntro />
        </div>
      </div>
      <div className=" center-web bg-statistics w-full">
        <div className="section-container">
          <ShortenItBar />
          <StatisticContainer />
        </div>
      </div>
      <div className=" center-we w-full">
        <DockBottom />
      </div>
      <div className="flex flex-1 center-web bg-bg4 w-full ">
        <div className="section-container">
          <FooterLinks />
        </div>
      </div>
    </>
  );
};

export default HomePage;
