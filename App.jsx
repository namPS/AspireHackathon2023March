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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/desktop-1">
          <Desktop1 {...desktop1Data} />
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
        <Route path="/:path(|landing-page)">
          <LandingPage {...landingPageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const vuesaxboldelement32Data = {
    className: "vuesaxlinearchart",
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
    logOut: "Log out",
    overlapGroup5: "/img/rectangle-1.png",
    title: "Overview",
    welcomeBackCustom: "Welcome back, CustomerID! Here is your last ride details",
    mesh08: "/img/mesh-08.png",
    x72Score: "7.2 SCORE",
    yourLastTripToEndingLocation: "Your Last Trip to ‘Ending Location’",
    betterThan86OfDrivers: "Better than 86% of drivers",
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
    distance: "Distance",
    fuelConsumption: "Fuel Consumption",
    timeSpent: "Time Spent",
    trafficCondition: "Traffic Condition",
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
    youHaveAvailed25: "You have availed 25% off on your insurance premium",
    registerNow: "Register now",
    getHeatedSeating: "Get Heated seating",
    availADiscountNow: "Avail a discount now",
    vuesaxboldelement3Props: vuesaxboldelement32Data,
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

