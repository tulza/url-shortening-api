import React from "react";
import workingIllusSvg from "/images/illustration-working.svg";

const PageIntro = () => {
  return (
    <>
      <div id="intro" className="my-16">
        <div>
          <h1 className="font-bold text-[72px] leading-[80px] text-large-text">
            More than just shorter links
          </h1>
          <p className="pb-8 w-[90%] text-small-text">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <a href="#" className="button">
            Get Started
          </a>
        </div>
        <img src={workingIllusSvg} className="translate-x-[30%]"></img>
      </div>
    </>
  );
};

export default PageIntro;
