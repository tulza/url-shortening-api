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
      <div className="center-web pt-10 bg-white">
        <div className="section-container">
          <Navigation />
          <PageIntro />
        </div>
      </div>
      <div className="center-web bg-statistics ">
        <div className="section-container ">
          <ShortenItBar />
          <StatisticContainer />
        </div>
      </div>
      <div className=" center-web ">
        <DockBottom />
      </div>
      <div className="flex-1 center-web bg-bg4 ">
        <div className="section-container">
          <FooterLinks />
        </div>
      </div>
    </>
  );
};

export default HomePage;
