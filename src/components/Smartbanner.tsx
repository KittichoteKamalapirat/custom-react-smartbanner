/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import CloseIcon from "../assets/close.svg?react";
import { isAndroid, isIos, isMobile } from "../userAgent";

interface CommonProps {
  iconUrl: string;
  title: string;
  //   description?: string;
  displayOnApple?: boolean;
  displayOnAndroid?: boolean;
  appleDescription?: string;
  androidDescription?: string;
  buttonLabel?: string;
  //   ios
  // applePrice: string;
  appleUrl: string;

  // android
  // androidPrice: string;
  androidUrl: string;

  // enablePlatform?: boolean;
  closeLabel?: string;

  isOpen?: boolean;
}

interface NoDesktopProps extends CommonProps {
  displayOnDesktop?: undefined | false;
}

interface DesktopProps extends CommonProps {
  displayOnDesktop: true;
  desktopDescription: string;
  desktopUrl: string;
}

type Props = NoDesktopProps | DesktopProps;

export const Smartbanner = ({
  iconUrl,
  title,
  //   description = "",
  displayOnApple = true,
  displayOnAndroid = true,
  appleDescription = "",
  androidDescription = "",
  buttonLabel = "Open",
  // applePrice,
  // androidPrice,
  appleUrl,
  isOpen: initialIsOpen = true,

  androidUrl,
  // displayOnDesktop = false,

  // enablePlatform = true,
  closeLabel = "Close",
  ...rest
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);
  const handleClose = () => setIsOpen(false);

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

    return "block";
  })();

  // if (!isMobile) return null;

  return (
    <div
      className={`fixed top-0 inset-x-0 flex justify-between items-center bg-neutral-100 px-4 py-2 border-b-[1px] border-neutral-300 ${display}`}
    >
      {/* left */}
      <div className="flex justify-start items-center gap-2">
        <CloseIcon
          className="w-4 h-4 text-neutral-400 hover:cursor-pointer"
          onClick={handleClose}
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
