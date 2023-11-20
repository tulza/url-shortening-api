import React from "react";

const Button = ({ label }) => {
  return (
    <>
      <div className="nav-links">
        <a href="#" className="text-nav-button hover:text-nav-button-hover">
          {label}
        </a>
      </div>
    </>
  );
};

const Navigation = () => {
  return (
    <div className="flex flex-row">
      <img src="/images/logo.svg" className="h-full m-auto pr-8" />
      <div className="w-full flex justify-between">
        <div className="flex flex-row items-center gap-4">
          <Button label="Features" />
          <Button label="Pricing" />
          <Button label="Resources" />
        </div>
        <div className="flex flex-row items-center ">
          <Button label="Login" />
          <a href="#" className="button">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
