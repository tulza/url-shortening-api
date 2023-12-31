import React from "react";
import {
  whiteShortly,
  facebookIcon,
  twitterIcon,
  pinterestIcon,
  instagramIcon,
} from "./imageComponent";
const FooterLinks = () => {
  return (
    <>
      <div className="grid desktop:grid-cols-[33%_50%_auto] py-10 w-full h-full mob:justify-center mob:text-center">
        <img
          src={whiteShortly}
          className="h-33 mob:m-auto mob:pb-6"
          alt="Shortly logo"
        />
        <div id="footer-links">
          <div>
            <h3>Features</h3>
            <a href="">Link Shortening</a>
            <a href="">Branded Links</a>
            <a href="">Analytics</a>
          </div>
          <div>
            <h3>Resources</h3>
            <a href="">Blog</a>
            <a href="">Developers</a>
            <a href="">Support</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="">About</a>
            <a href="">Our Team</a>
            <a href="">Careers</a>
            <a href="">Contact </a>
          </div>
        </div>
        <div className="flex gap-4 justify-end mob:pt-6">
          <img src={facebookIcon} className="h-[24px]" alt="facebook icon" />
          <img src={twitterIcon} className="h-[24px]" alt="twitter icon" />
          <img src={pinterestIcon} className="h-[24px]" alt="pinterest icon" />
          <img src={instagramIcon} className="h-[24px]" alt="instagram icon" />
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
