import { Button } from "./components/Button";
import { Smartbanner } from "./components/Smartbanner";

function App() {
  return (
    <div>
      <Button />
      <Smartbanner
        title="Frontend Masters"
        // applePrice="Free"
        // androidPrice="Free
        appleUrl="https://apps.apple.com/us/app/frontend-masters/id1383780486"
        androidUrl="https://play.google.com/store/apps/details?id=in.mjg.frontendmasters.store&hl=en_GB"
        appleDescription="Get on the App Store"
        androidDescription="Get on the Play Store"
        iconUrl="https://play-lh.googleusercontent.com/8X11A1RYP--qUN-FA3tuEdNG--8QSptibgY6xWQRUDI2YASyAXe726CaE_jEohFYGno=w240-h480-rw"
        // displayOnDesktop
        displayOnAndroid={false}
        // desktopDescription="Get on the website"
        // desktopUrl="https://frontendmasters.com"
      />
      <div className="mt-4">Content here 1</div>
      <div className="mt-4">Content here 2</div>
      <div className="mt-4">Content here 3</div>
    </div>
  );
}

export default App;
