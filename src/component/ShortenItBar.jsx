import clsx from "clsx";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewLinkBox = ({ original, newLink }) => {
  return (
    <div className="flex justify-between rounded-[16px] items-center py-4 px-6 translate-y-[-75px] mt-4 bg-white">
      <a href={original}>{original}</a>
      <a href={newLink} className="text-sing-up">
        {newLink}
        <button className="ml-4 py-2 px-8 rounded-[8px] text-white bg-sing-up hover:bg-sing-up-hover ">
          Copy
        </button>
      </a>
    </div>
  );
};

const ShortenItBar = () => {
  const [inputLink, setLink] = useState("https://www.youtube.com/");
  const [urlBlock, setUrlBlock] = useState(new Array());
  const [isFetching, setIsFetching] = useState(false);

  // handleAPI
  const handleShortenAPI = (link) => {
    if (!link) {
      setIsFetching(false);
      return "Please add a link";
    }

    fetch("https://corsproxy.io/?https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: link }),
    })
      .then((response) => {
        if (!response.ok) {
          throw "invalid link";
        }
        return response.json();
      })
      .then((json) => json.result_url)
      .then((data) => {
        setIsFetching(false);
        setUrlBlock([{ original: link, new: data }].concat(urlBlock));
      })
      .catch((err) => {
        setIsFetching(false);
        console.log("invalid link :(");
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
          value={inputLink}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <input
          type="button"
          className={clsx(
            "transition-bg rounded-[16px] font-bold py-2 px-6 text-white z-10 mr-10 h-[60px] ",
            isFetching
              ? "bg-fetching"
              : "bg-sing-up hover:bg-sing-up-hover cursor-pointer"
          )}
          value={isFetching ? "Fetching" : "Shorten It!"}
          onClick={() => {
            if (isFetching == false) {
              setIsFetching(true);
              handleShortenAPI(inputLink);
            }
          }}
        />
      </div>
      {urlBlock.map((url) => {
        return (
          <NewLinkBox
            original={url.original}
            newLink={url.new}
            key={uuidv4()}
          />
        );
      })}
    </>
  );
};

export default ShortenItBar;
