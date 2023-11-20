import React, { useState } from "react";
import FooterLinks from "./FooterLinks";

const LinkBox = ({ original, newLink }) => {
  return (
    <div className="flex justify-between rounded-[16px] items-center py-4 px-6 translate-y-[-75px] mt-4 bg-white">
      <span>{original}</span>
      <span className="text-sing-up">
        {newLink}
        <button className="ml-4 py-2 px-8 rounded-[8px] text-white bg-sing-up hover:bg-sing-up-hover">
          Copy
        </button>
      </span>
    </div>
  );
};

const ShortenItBar = () => {
  const [inputLink, setLink] = useState("https://www.youtube.com/");
  const [urlBlock, setUrlBlock] = useState([]);

  const CallApi = (link) => {
    fetch("https://corsproxy.io/?https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: link }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUrlBlock(urlBlock + [data.result_url]);
        console.log(urlBlock);
      });
  };

  return (
    <>
      <div className="relative flex items-center gap-4 h-[150px] rounded-[16px] translate-y-[-50%] overflow-hidden">
        <img
          src="/images/bg-shorten-desktop.svg"
          className="bg-shorten-link-box absolute"
        />
        <input
          type="input"
          className="z-10 h-[60px] w-[100%] ml-10 pl-4 rounded-[16px]"
          placeholder="Shorten a link here..."
        />
        <input
          type="button"
          className="rounded-[16px] font-bold py-2 px-6 text-white bg-sing-up hover:bg-sing-up-hover z-10 mr-10 h-[60px] rounded-[16px]"
          value="Shorten It!"
          onclick={() => {CallApi(link)}}
        />
      </div>
      <LinkBox original="youtube.com" newLink="https://cleanuri.com/x9lZzk" />
    </>
  );
};

export default ShortenItBar;
