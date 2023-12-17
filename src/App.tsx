import { Button } from "./components/Button";
import { Smartbanner } from "./components/Smartbanner";

function App() {
  return (
    <div>
      ...
      <Smartbanner
        title="Frontend Masters"
        applePrice="Free"
        appleUrl="Free"
        androidPrice="Free"
        androidUrl="Free"
        iconUrl="https://play-lh.googleusercontent.com/8X11A1RYP--qUN-FA3tuEdNG--8QSptibgY6xWQRUDI2YASyAXe726CaE_jEohFYGno=w240-h480-rw"
        author="Frontend Masters"
      />
      <div className="mt-4">Content here 1</div>
      <div className="mt-4">Content here 2</div>
      <div className="mt-4">Content here 3</div>
    </div>
  );
}

export default App;
