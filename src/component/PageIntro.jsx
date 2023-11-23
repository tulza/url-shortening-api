import React from "react";
import workingIllusSvg from "/images/illustration-working.svg";

const PageIntro = () => {
  return (
    <>
      <div id="intro">
        <div className="mob:flex flex-col items-center">
          <h1 className="mob-center font-bold text-[72px] mob:text-[48px] leading-[80px] mob:leading-[60px] text-large-text">
            More than just shorter links
          </h1>
          <p className="mob-center pb-8 w-[90%] text-small-text">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <div className="flex mob:justify-center">
            <button className="button mob:px-10">Get Started</button>
          </div>
        </div>
        <img
          src={workingIllusSvg}
          className="translate-x-[30%] mob:translate-x-[20%] pb-16 scale-[1.5] mob:py-16"
          alt="person working illustration SVG"
        />
      </div>
    </>
  );
};

export default PageIntro;
