import { useState } from "react";
import { SmartbannerProps, Smartbanner } from "./Smartbanner";
import { isAndroid, isIos, isMobile } from "../lib/userAgent";
import { COOKIE, setCookie } from "../lib/cookie";

const initialState = {
  isOpen: true,
  title: "Frontend Masters",
  iconUrl:
    "https://play-lh.googleusercontent.com/8X11A1RYP--qUN-FA3tuEdNG--8QSptibgY6xWQRUDI2YASyAXe726CaE_jEohFYGno=w240-h480-rw",

  appleDescription: "Get on the App Store",
  androidDescription: "Get on the Play Store",
  appleUrl: "https://apps.apple.com/us/app/frontend-masters/id1383780486",
  androidUrl:
    "https://play.google.com/store/apps/details?id=in.mjg.frontendmasters.store&hl=en_GB",
  displayOnAndroid: true,
  displayOnApple: true,
};

const CHANGE_PLATFORM_LABEL = "Change to this platform via Dev Tools";

const Demo = () => {
  const [props, setProps] = useState<SmartbannerProps>(initialState);

  const {
    iconUrl,
    title,
    displayOnApple,
    displayOnAndroid,
    appleDescription,
    androidDescription,
    buttonLabel,

    appleUrl,
    isOpen: initialIsOpen,
    androidUrl,
    ...rest
  } = props;
  //   const [title, setTitle] = useState<string>("Frontend Masters");
  //   const [appleDescription, setAppleDescription] = useState<string>(
  //     "Get on the App Store"
  //   );
  //   const [androidDescription, setAndroidDescription] = useState<string>(
  //     "Get on the Play Store"
  //   );

  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen);

  const handleClose = () => {
    setCookie(COOKIE.HideSmartBanner, "true", {
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 1, // 1 day
    });

    setIsOpen(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* left */}
      <div>
        <Smartbanner
          isOpen={isOpen}
          onClose={handleClose}
          title={title}
          appleDescription={appleDescription}
          androidDescription={androidDescription}
          displayOnApple={displayOnApple}
          displayOnAndroid={displayOnAndroid}
          appleUrl={appleUrl}
          androidUrl={androidUrl}
          iconUrl={iconUrl}
          displayOnDesktop={rest.displayOnDesktop}
          desktopDescription={
            rest.displayOnDesktop ? rest.desktopDescription : ""
          }
          desktopUrl={rest.displayOnDesktop ? rest.desktopUrl : ""}
        />
        <div className="mt-4">
          <h2 className="font-semibold text-center">
            Try playing with different props here
          </h2>
          {/* title */}
          <div className="mt-4">
            <label className="text-sm">Title</label>
            <input
              type="text"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={title}
              onChange={(e) => setProps({ ...props, title: e.target.value })}
            />
          </div>

          <div className="mt-4">
            <label className="text-sm">Icon Url</label>
            <input
              type="text"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={iconUrl}
              onChange={(e) => setProps({ ...props, iconUrl: e.target.value })}
            />
          </div>

          {/* Apple */}
          <div
            className={`mt-4 p-2 ${
              isIos ? "border-teal-400 rounded-md bg-teal-50 border-[1px]" : ""
            }`}
          >
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="true"
                defaultChecked={true}
                onChange={(e) => {
                  setProps({
                    ...props,
                    displayOnApple: !displayOnApple,
                  });
                }}
                id="apple-checkbox"
                className="hover:cursor-pointer"
              />

              <label
                htmlFor="apple-checkbox"
                className="font-semibold hover:cursor-pointer"
              >
                Apple
              </label>
              {isIos ? (
                <span className="text-sm px-2 py-[2px] bg-teal-400 rounded-md text-white">
                  Matched User Agent
                </span>
              ) : (
                <p className="text-sm px-2 py-[2px] border-[1px] border-teal-400 rounded-md text-teal-400">
                  {CHANGE_PLATFORM_LABEL}
                </p>
              )}
            </div>
            {/* apple description */}

            {displayOnApple && (
              <>
                <div>
                  <label className="text-sm">Apple Description</label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={appleDescription}
                    onChange={(e) =>
                      setProps({ ...props, appleDescription: e.target.value })
                    }
                  />
                </div>

                <div className="mt-4">
                  <label className="text-sm">Apple Store Link</label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={appleUrl}
                    onChange={(e) =>
                      setProps({ ...props, appleUrl: e.target.value })
                    }
                  />
                </div>
              </>
            )}
          </div>

          {/* Android url */}
          <div
            className={`mt-4 p-2 ${
              isAndroid
                ? "border-teal-400 rounded-md bg-teal-50 border-[1px]"
                : ""
            }`}
          >
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="true"
                defaultChecked={true}
                onChange={(e) => {
                  setProps({
                    ...props,
                    displayOnAndroid: !displayOnAndroid,
                  });
                }}
                id="android-checkbox"
                className="hover:cursor-pointer"
              />

              <label
                htmlFor="android-checkbox"
                className="font-semibold hover:cursor-pointer"
              >
                Android
              </label>
              {isAndroid ? (
                <span className="text-sm px-2 py-[2px] bg-teal-400 rounded-md text-white">
                  Matched User Agent
                </span>
              ) : (
                <p className="text-sm px-2 py-[2px] border-[1px] border-teal-400 rounded-md text-teal-400">
                  {CHANGE_PLATFORM_LABEL}
                </p>
              )}
            </div>
            {/* android description */}

            {displayOnAndroid && (
              <>
                <div>
                  <label className="text-sm">Android Description</label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={androidDescription}
                    onChange={(e) =>
                      setProps({ ...props, androidDescription: e.target.value })
                    }
                  />
                </div>
                <div className="mt-4">
                  <label className="text-sm">Play Store Link</label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={androidUrl}
                    onChange={(e) =>
                      setProps({ ...props, androidUrl: e.target.value })
                    }
                  />
                </div>
              </>
            )}
          </div>
          {/* Desktop url */}
          <div
            className={`mt-4 p-2 rounded-md ${
              !isMobile
                ? " border-teal-400 bg-teal-50 border-[1px]"
                : "bg-neutral-100"
            }`}
          >
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="true"
                defaultChecked={false}
                onChange={(e) => {
                  (setProps as any)({
                    ...props,
                    displayOnDesktop: !rest.displayOnDesktop,
                  });
                }}
                className="hover:cursor-pointer"
                id="desktop-checkbox"
              />

              <label
                htmlFor="desktop-checkbox"
                className="font-semibold hover:cursor-pointer"
              >
                Desktop
              </label>
              {!isMobile && (
                <span className="text-sm px-2 py-[2px] bg-teal-400 rounded-md text-white">
                  Matched User Agent
                </span>
              )}
            </div>

            {rest.displayOnDesktop && (
              <div>
                {/* android description */}
                <div>
                  <label className="text-sm mt-4">Desktop Description</label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={rest.desktopDescription}
                    onChange={(e) =>
                      (setProps as any)({
                        ...props,
                        desktopDescription: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mt-4">
                  <label className="text-sm">
                    Link to app (Apple Store or Play Store)
                  </label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={rest.desktopUrl}
                    onChange={(e) =>
                      (setProps as any)({
                        ...props,
                        desktopUrl: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* right */}
      <div>
        <h3 className="text-lg font-bold mt-4">Props</h3>
        <pre className="bg-neutral-800 text-white p-4 rounded-lg">
          {JSON.stringify(props, null, 4)}
        </pre>
      </div>
    </div>
  );
};
export default Demo;
