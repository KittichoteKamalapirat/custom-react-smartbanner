/// <reference types="vite-plugin-svgr/client" />
import { useCallback } from "react";
import "../index.css";
import CloseIcon from "../assets/close.svg?react";

interface Props {
  iconUrl: string;
  title: string;
  //   description?: string;
  author?: string;
  buttonLabel?: string;
  //   ios
  applePrice: string;
  appleUrl: string;

  // android
  androidPrice: string;
  androidUrl: string;

  enablePlatform?: boolean;
  closeLabel?: string;
}
export const SmartBanner = ({
  iconUrl,
  title,
  //   description = "",
  author = "",
  buttonLabel = "Open",
  applePrice,
  appleUrl,

  androidPrice,
  androidUrl,

  enablePlatform = true,
  closeLabel = "Close",
}: Props) => {
  const onClick = useCallback(() => {
    console.log("Vite + React + TypeScript + Tailwind = ❤️");
  }, []);

  return (
    <div
      onClick={onClick}
      className={`fixed top-0 inset-x-0 flex justify-between items-center bg-neutral-100 px-4 py-2 border-b-[1px] border-neutral-300`}
    >
      {/* left */}
      <div className="flex justify-start items-center gap-2">
        {/* <img alt="App Icon" src={closeIcon} className="w-3 h-3 text-red-300" /> */}
        <CloseIcon className="w-4 h-4 text-neutral-400" />
        <img alt="App Icon" src={iconUrl} className="w-12 h-12 rounded-lg" />
        <div className="text-left">
          <p className="text-sm">{title}</p>
          <p className="text-xs">{author}</p>
        </div>
      </div>

      {/* right */}
      <button className="text-blue-500">{buttonLabel}</button>
    </div>
  );
};
