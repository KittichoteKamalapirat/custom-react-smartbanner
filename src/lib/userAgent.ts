import { UAParser } from "ua-parser-js";

const uaParser = new UAParser();

const isMobile = uaParser.getDevice().type === "mobile";
const isIos = uaParser.getOS().name === "iOS";
const isAndroid = uaParser.getOS().name === "Android";

const getMobileOperatingSystem = () => {
  const userAgent = navigator.userAgent;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "windowphone";
  }

  if (/android/i.test(userAgent)) {
    return "android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "ios";
  }

  return "other";
};

export { getMobileOperatingSystem, isAndroid, isIos, isMobile };
