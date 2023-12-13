import "./App.css";
import { Button } from "./components/Button";
import { SmartBanner } from "./components/Smartbanner";

function App() {
  return (
    <div>
      <Button />
      <SmartBanner
        title="Earnin: Make Every Day Payday"
        applePrice="Free"
        appleUrl="Free"
        androidPrice="Free"
        androidUrl="Free"
        iconUrl="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/16/42/ce/1642cec2-efef-f43b-6e9b-576322fe17ce/AppIcon-0-0-1x_U007ephone-0-0-0-85-220.png/540x540bb.jpg"
        author="Activehours Inc."
      />
    </div>
  );
}

export default App;
