import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop1 from "./components/Desktop1";
import HipHop from "./components/HipHop";
import Rock from "./components/Rock";
import Rainy from "./components/Rainy";
import Snowy from "./components/Snowy";
import Frame1 from "./components/Frame1";
import LandingPage from "./components/LandingPage";
import Stats from "./components/Stats";
import Courses from "./components/Courses";

function App() {
  const [clientInfo, setClientInfo] = React.useState(null);
  console.log('clientInfo', clientInfo)

  return (
    <Router>
      <Switch>
        <Route path="/desktop-1">
          <Desktop1 {...desktop1Data} clientInfo={clientInfo} setClientInfo={setClientInfo} />
        </Route>
        <Route path="/classical">
          <HipHop
            youListenedTo="You listened to"
            viewPlaylist="View Playlist"
            title="Classical"
            maskGroup="/img/mask-group-4.png"
          />
        </Route>
        <Route path="/pop">
          <Rock
            youListenedTo="You listened to"
            place="Pop"
            viewPlaylist="View Playlist"
            maskGroup="/img/mask-group.png"
          />
        </Route>
        <Route path="/jazz">
          <Rock
            youListenedTo="You listened to"
            place="Jazz"
            viewPlaylist="View Playlist"
            maskGroup="/img/mask-group-2.png"
            className="jazz"
          />
        </Route>
        <Route path="/rock">
          <Rock
            youListenedTo="You listened to"
            place="Rock"
            viewPlaylist="View Playlist"
            maskGroup="/img/mask-group-1.png"
            className="rock"
          />
        </Route>
        <Route path="/hiphop">
          <HipHop
            youListenedTo="You listened to"
            viewPlaylist="View Playlist"
            title="Hip-Hop"
            maskGroup="/img/mask-group.png"
            className="hiphop"
          />
        </Route>
        <Route path="/rainy">
          <Rainy text1="9°" rainy="Rainy" rainCloud="/img/rain-cloud@2x.png" />
        </Route>
        <Route path="/snowy">
          <Snowy surname="Snow Shower" text1="-10°" snowCloud="/img/snow-cloud@2x.png" />
        </Route>
        <Route path="/clear">
          <Frame1 text1="12°" sunny="Sunny" />
        </Route>
        <Route path="/frame-1">
          <Frame1 text1="12°" sunny="Sunny" className="frame-1" />
        </Route>
        <Route path="/stats">
          <Stats {...desktop1Data} />
        </Route>
        <Route path="/:path(|landing-page)">
          <LandingPage {...landingPageData} setClientInfo={setClientInfo} />
        </Route>
        <Route path="/courses">
          <Courses {...coursesData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const vuesaxboldelement32Data = {
    className: "vuesaxlinearchart",
};

const coursesData = {
  overlapGroup4: "/img/vector-3.png",
  logoShapes7: "/img/logo-shapes-7@2x.png",
  roadwhiz: "RoadWhiz",
  vuesaxBoldElement3: "/img/vuesax-bold-element-3@2x.png",
  overview: "Overview",
  group: "/img/group@2x.png",
  store: "Store",
  iconBar_Chart: "/img/vuesax-linear-chart@2x.png",
  statistics: "Statistics",
  iconFolder: "/img/vuesax-linear-folder-2-2@2x.png",
  courses: "Courses",
  text: "",
  vuesaxLinearLogin: "/img/vuesax-linear-login@2x.png",
  logOut: "Log out",
  overlapGroup5: "/img/rectangle-1.png",
  title: "Courses",
  coursesToHelpYou: "Courses to help you better your score for amazing deals and discounts on your vehicle insurance.",
  image51: "/img/image-5-2@2x.png",
  trafficLawsRecap: "Traffic Laws recap",
  enroll1: "Enroll",
  image52: "/img/image-5-3@2x.png",
  stayingFocusedSimulation: "Staying Focused: Simulation",
  enroll2: "Enroll",
  image53: "/img/image-5-4@2x.png",
  takingCarOfYourCar: "Taking car of your car",
  enroll3: "Enroll",
};

const desktop1Data = {
    overlapGroup4: "/img/vector-3.png",
    logoShapes7: "/img/logo-shapes-7@2x.png",
    roadwhiz: "RoadWhiz",
    overview: "Overview",
    group: "/img/group@2x.png",
    store: "Store",
    statistics: "Statistics",
    iconFolder: "/img/vuesax-linear-folder-2@2x.png",
    courses: "Courses",
  text: "",
    overlapGroup5: "/img/rectangle-1.png",
    title: "Overview",
  welcomeBackCustom: "Welcome back, [CustomerID]! Here is your last ride details",
  mesh08: "/img/mesh-08.png",
    yourLastTripToEndingLocation: "Your Last Trip to ‘Ending Location’",
  betterThan86OfDrivers: "Better than [driverAverage]% of drivers",
    i: "i",
    spanText1: <React.Fragment>Seat Belt Usage<br /></React.Fragment>,
    spanText2: "Good",
    spanText3: <React.Fragment>Rapid Breaking<br /></React.Fragment>,
    spanText4: "Poor",
    spanText5: <React.Fragment>Rapid Acceleration <br /></React.Fragment>,
    spanText6: "Moderate",
    spanText7: <React.Fragment>Unsafe Lane Change<br /></React.Fragment>,
    spanText8: "Moderate",
    spanText9: <React.Fragment>Vehicle Maintenance<br /></React.Fragment>,
    spanText10: "Good",
    surname: "Snow Shower",
    text1: "-10°",
  snowCloud: "/img/snow-cloud@2x.png",
  rainyDay: "/img/rainy@2x.png",
  clearDay: "/img/clear@2x.png",
    distance: "Distance",
    fuelConsumption: "Fuel Consumption",
  timeSpent: "Time Spent",
    overlapGroup10: "/img/image-1@2x.png",
    routeTaken: "Route Taken",
    youListenedTo: "You listened to",
    viewPlaylist: "View Playlist",
    pop: "Pop",
    maskGroup: "/img/mask-group.png",
    ellipse2: "/img/ellipse-2@2x.png",
    cust0001: "Cust0001",
    line1: "/img/line-1@2x.png",
    recommendations: "Recommendations",
  insurancePercent: "You have [insurancePercent] off on your insurance premium",
    registerNow: "Register now",
    getHeatedSeating: "Get Heated seating",
    availADiscountNow: "Avail a discount now",
  vuesaxboldelement3Props: vuesaxboldelement32Data
};

const landingPageData = {
    overlapGroup1: "/img/vector-3.png",
    rectangle1: "/img/rectangle-1-3.png",
    title: "RoadWhiz",
    overlapGroup: "/img/group-165-3.png",
    logoShapes7: "/img/logo-shapes-7-2@2x.png",
    mesh08: "/img/mesh-08-3@2x.png",
    customerId: "Customer ID",
    inputType: "text",
    inputPlaceholder: "Customer ID goes here",
    login: "LOGIN",
};

