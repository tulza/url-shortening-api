import clsx from "clsx";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { bgShortenDesktop, bgShortenMobile } from "./imageComponent";

const copyToClipboard = (link) => {
  navigator.clipboard.writeText(link);
};

const NewLinkBox = ({ original, newLink }) => {
  const [copied, setcopied] = useState(false);

  return (
    <div className="flex justify-between rounded-[16px] desktop:items-center gap-4 py-4 mob:px-4 desktop:px-6 translate-y-[-75px] mt-4 bg-white mob:flex-col">
      <a href={original} className="truncate">
        {original}
      </a>
      <div className="mobile-only bg-Gray w-full h-[1px]"></div>
      <div className="flex max-w-[400px] desktop:items-center mob:flex-col mob:gap-4">
        <a href={newLink} className="text-sing-up truncate">
          {newLink}
        </a>
        <input
          type="button"
          className={clsx(
            "transition-bg desktop:ml-4 py-2 mob:w-full px-8 rounded-[8px] text-white",
            copied
              ? "bg-fetching"
              : "bg-sing-up cursor-pointer hover:bg-sing-up-hover  "
          )}
          onClick={() => {
            setcopied(true);
            copyToClipboard(newLink);
            setTimeout(() => {
              setcopied(false);
            }, 500);
          }}
          value={copied ? "Copied!" : "Copy"}
        />
      </div>
    </div>
  );
};

const ShortenItBar = () => {
  const [inputLink, setLink] = useState("");
  const [urlBlock, setUrlBlock] = useState(new Array());
  const [isFetching, setIsFetching] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorType, setErrorType] = useState("");

  // handleAPI
  const handleShortenAPI = (link) => {
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
        handleError("Invalid Link");
        console.log("invalid link :(");
      });
  };

  const handleError = (errorType) => {
    setHasError(true);
    setErrorType(errorType);
  };
  return (
    <>
      <div className="relative flex mob:flex-col items-center gap-4 h-[150px] mob:h-[200px] rounded-[16px] translate-y-[-50%] overflow-hidden">
        <img
          src={bgShortenDesktop}
          className="desktop-only bg-shorten-link-box absolute"
          alt="background image of shorten link box"
        />
        <img
          src={bgShortenMobile}
          className="mobile-only bg-shorten-link-box absolute w-full"
          alt="background image of shorten link box"
        />

        {/* input bar */}
        <input
          className={clsx(
            "z-10 h-[60px] w-[100%] rounded-[12px] desktop:ml-10 pl-4  m-4 mob:w-[90%]",
            hasError ? "outline outline-red-400 outline-3" : ""
          )}
          placeholder="Shorten a link here..."
          value={inputLink}
          onChange={(e) => {
            setHasError(false);
            setLink(e.target.value);
          }}
        />
        {/* submit button */}
        <input
          type="button"
          className={clsx(
            "transition-bg rounded-[16px] font-bold py-2 px-6 text-white z-10 desktop:mr-10 h-[60px] mob:w-[90%]",
            isFetching
              ? "bg-fetching"
              : "bg-sing-up hover:bg-sing-up-hover cursor-pointer"
          )}
          value={isFetching ? "Fetching" : "Shorten It!"}
          onClick={() => {
            if (!inputLink) {
              handleError("Please add a link");
            } else if (isFetching == false) {
              setHasError(false);
              setIsFetching(true);
              handleShortenAPI(inputLink);
            }
          }}
        />
        {/* Error message */}
        <span className="basis-auto absolute z-20 bottom-4 mob:bottom-20 left-12 mob:left-6 text-[16px] text-red-400 italic">
          {hasError ? errorType : ""}
        </span>
      </div>
      {/*box for every link shorten */}
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
