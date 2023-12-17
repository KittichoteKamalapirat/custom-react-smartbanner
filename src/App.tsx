import { Button } from "./components/Button";
import { Smartbanner } from "./components/Smartbanner";

function App() {
  return (
    <div>
      <Button />
      <Smartbanner
        title="Jouzu Speak: Speak Japanese with AI"
        applePrice="Free"
        appleUrl="Free"
        androidPrice="Free"
        androidUrl="Free"
        iconUrl="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/16/42/ce/1642cec2-efef-f43b-6e9b-576322fe17ce/AppIcon-0-0-1x_U007ephone-0-0-0-85-220.png/540x540bb.jpg"
        author=""
      />
      <div className="mt-4">Content here 1</div>
      <div className="mt-4">Content here 2</div>
      <div className="mt-4">Content here 3</div>
    </div>
  );
}

export default App;
