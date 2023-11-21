import React from "react";

const FooterLinks = () => {
  return (
    <>
      <div className="grid grid-cols-[33%_50%_auto] py-10 w-full h-full">
        <img src="/images/logo-white.svg" className="h-33" />
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
        <div className="flex gap-4 justify-end">
          <img src="images/icon-facebook.svg" className="h-[24px]" />
          <img src="images/icon-twitter.svg" className="h-[24px]" />
          <img src="images/icon-pinterest.svg" className="h-[24px]" />
          <img src="images/icon-instagram.svg" className="h-[24px]" />
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
