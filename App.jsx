import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|landing-page)">
          <LandingPage {...landingPageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
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

