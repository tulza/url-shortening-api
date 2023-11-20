import React from "react";

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
        <img src="../../resources/images/illustration-working.svg"></img>
      </div>
    </>
  );
};

export default PageIntro;
