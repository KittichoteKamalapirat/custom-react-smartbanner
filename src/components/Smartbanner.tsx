/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import CloseIcon from "../assets/close.svg?react";
import { COOKIE, getCookie } from "../lib/cookie";
import { isAndroid, isIos, isMobile } from "../lib/userAgent";

interface CommonProps {
  // ui
  title: string;
  iconUrl: string;
  appleDescription?: string;
  androidDescription?: string;
  buttonLabel?: string;
  //   logics
  appleUrl: string;
  androidUrl: string;
  displayOnApple?: boolean;
  displayOnAndroid?: boolean;
  // state

  isOpen?: boolean;
  onClose?: () => void;
  notDisplayAgainSeconds?: number; // in seconds
}

interface NoDesktopProps extends CommonProps {
  displayOnDesktop?: undefined | false;
}

export interface DesktopProps extends CommonProps {
  displayOnDesktop: true;
  desktopDescription: string;
  desktopUrl: string;
}

export type SmartbannerProps = NoDesktopProps | DesktopProps;

export const Smartbanner = ({
  // ui
  title,
  iconUrl,
  appleDescription = "",
  androidDescription = "",
  buttonLabel = "Open",
  // logics
  displayOnApple = true,
  displayOnAndroid = true,
  appleUrl,
  androidUrl,
  //state
  isOpen: initialIsOpen = true,
  onClose,
  ...rest
}: SmartbannerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(
    getCookie(COOKIE.HideSmartBanner) === "true" ? false : initialIsOpen
  );

  const linkToStore = (() => {
    if (isMobile) {
      if (isIos) return appleUrl;
      return androidUrl;
    }

    if (rest.displayOnDesktop) return rest.desktopUrl;
    return "";
  })();

  // const price = isIos ? applePrice : androidPrice;
  const description = (() => {
    if (isMobile) {
      if (isIos) return appleDescription;
      return androidDescription;
    }

    if (rest.displayOnDesktop) return rest.desktopDescription;
    return "";
  })();

  const display = (() => {
    // hide if not mobile and not explicit displayOnDesktop
    if (
      !isOpen ||
      (!isMobile && !rest.displayOnDesktop) ||
      (isIos && !displayOnApple) ||
      (isAndroid && !displayOnAndroid)
    )
      return "hidden";

    return "flex";
  })();

  return (
    <div
      className={`fixed top-0 inset-x-0 justify-between items-center bg-neutral-100 px-4 py-2 border-b-[1px] border-neutral-300 ${display}`}
    >
      {/* left */}
      <div className="flex justify-start items-center gap-2">
        <CloseIcon
          className="w-4 h-4 text-neutral-400 hover:cursor-pointer"
          onClick={onClose}
        />
        <img alt="App Icon" src={iconUrl} className="w-12 h-12 rounded-lg" />
        <div className="text-left">
          <p className="text-sm">{title}</p>
          <p className="text-xs">{description}</p>
        </div>
      </div>

      {/* right */}
      <a href={linkToStore} className="text-blue-500">
        {buttonLabel}
      </a>
    </div>
  );
};
