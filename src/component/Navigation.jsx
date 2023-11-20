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
      <img src="../resources/images/logo.svg" className="h-full m-1" />
      <div className="w-full flex justify-between">
        <div className="flex flex-row gap-4">
          <Button label="Features" />
          <Button label="Pricing" />
          <Button label="Resources" />
        </div>
        <div className="flex flex-row">
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
