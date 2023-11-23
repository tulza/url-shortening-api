import React from "react";
import shortlyLogo from "/images/logo.svg";
// import mobileNav from "/image/";

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

const NavDesktop = () => {
  return (
    <>
      <div className="w-full flex justify-between desktop-only">
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
    </>
  );
};

const NavMoblie = () => {
  return (
    <>
      <img src="" />
    </>
  );
};
const Navigation = () => {
  return (
    <div className="flex flex-row">
      <img src={shortlyLogo} className="h-full m-auto pr-8" />
      <NavDesktop />
    </div>
  );
};

export default Navigation;