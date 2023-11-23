import React, { useState } from "react";
import shortlyLogo from "/images/logo.svg";
import clsx from "clsx";
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

const NavMoblie = ({ isToggled }) => {
  return (
    <>
      <div className="relative w-full mt-4">
        <div
          className={clsx(
            "z-20 absolute overflow-hidden w-full bg-Dark-Violet rounded-[24px] transition-[height] duration-300",
            isToggled ? "h-[400px]" : "h-[0px]"
          )}
        >
          <div className="absolute w-[375px] flex flex-col items-center gap-[34px] p-8 text-white">
            <p>Features</p>
            <p>Pricing</p>
            <p>Resources</p>
            <div className="bg-Grayish-Violet h-[1px] w-full" />
            <p>Login</p>
            <button className="button w-full">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

const Navigation = () => {
  const [toggleMobNav, setToggleMobNav] = useState(false);

  const handleMobNav = () => {
    setToggleMobNav(!toggleMobNav);
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <img src={shortlyLogo} className={clsx("h-full mob:m-auto pr-8")} />
        <NavDesktop />
        {/* mobile nav button */}
        <button
          className="flex flex-col gap-[5px] mobile-only"
          onClick={handleMobNav}
        >
          <div className="w-[35px] h-[5px] bg-black" />
          <div className="w-[35px] h-[5px] bg-black" />
          <div className="w-[35px] h-[5px] bg-black" />
        </button>
      </div>
      <NavMoblie isToggled={toggleMobNav} />
    </>
  );
};

export default Navigation;
