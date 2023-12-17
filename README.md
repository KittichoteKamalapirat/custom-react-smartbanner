# custom-react-smartbanner

`custom-react-smartbanner` is a npm package designed to create smart app banners, used for advertising iOS and Android apps on a website. It allows you to keep details such as the icon, title, author and price customizable for both iOS and Android.

It uses ReactJS extensively and is very flexible for developers to use, allowing you to display banners in a certain component or your entire application.

### What you can do

- Choose to display the banner only on some pages.
- Choose to display or hide based on custom React's state

### What you can't do

- Detect whether a user has a mobile app installed or not. (This is not allowed due to user's privacy, unless you use Apple Native Smartbanner which can detect the installed app on safari).
- So if you want to dynamically based on user's app installation state, you might need other proxy. Ex. has a server side to keep track whether user has ever send requests from mobile app or not.

## Installation

```bash
npm install custom-react-smartbanner
```

## Usage

Start by importing `Smartbanner` and `Button` from the installed package and add the package css file to your app component:

```javascript
import { Smartbanner, Button } from "custom-react-smartbanner";
import "custom-react-smartbanner/dist/custom-react-smartbanner.css";
```

**Use case 1 :** Show the banner always

If you want to always show the banner, include the `Smartbanner` component in your top level component such as `app.tsx`:

```jsx
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
      ...
    </div>
  );
}
```

**Use case 2 :** Only show in some pages

If you want to show the banner only in some pages, then include the `Smartbanner` component only in those specific components.

```jsx
function ProductPage() {
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
      ...
    </div>
  );
}
```


## Props

| Prop | Required / Optional | Default Value | Description |
| --- | --- | --- | --- |
| title | required | `undefined` | Title of the app name. Should be the name of the app with or without a slogan ex. Frontend, Masters, Frontend Masters | Your Path to Senior Developer |
| appleDescription | optional | `""` | Description to display on the banner if the device is apple (This will be automatically detected via user agent). Here, you can choose to display the price, review ratings, author's name, etc. |
| androidDescription | optional | `""` | Description to display on the banner if the device is android (This will be automatically detected via user agent)|
| iconUrl | required | `undefined` | Url of the icon that will be displayed (If your app is published, you can get the icon url on either the app store or the play store) |
| buttonLabel | optional | `"Open"` | Label for the banner button |
| appleUrl | optional | `undefined` | URL where the users will be redirected on clicking the banner (if the user is using an apple device) |
| androidUrl | optional | `undefined` | URL where the users will be redirected on clicking the banner (if the user is using an android device) |
| displayOnApple | optional | `true` | Indicates if the banner should be displayed on apple devices |
| displayOnAndroid | optional | `true`` | Indicates if the banner should be displayed on android devices |



## Contribution

Contributions are always welcome. Please fork this repository and create a pull request if you have any improvements or feature additions. We appreciate your help in making this package more user-friendly!