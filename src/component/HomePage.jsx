import React from "react";
import Navigation from "../../Navigation";

const HomePage = () => {
  return (
    <>
      {/* container */}
      <div className="bg-gray-100">
        <Navigation />
      </div>
      <div className="bg-gray-300">test</div>
      <div className="bg-gray-100">test</div>
      <div className="bg-gray-300">test</div>
    </>
  );
};

export default HomePage;
