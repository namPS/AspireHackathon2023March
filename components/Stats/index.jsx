import React from "react";
import Vuesaxboldelement3 from "../Vuesaxboldelement3";
import Vuesaxlinearlogin from "../Vuesaxlinearlogin";
import Vuesaxlinearnotification from "../Vuesaxlinearnotification";
import "./Stats.css";
import Rainy from "../Rainy";
import Snowy from "../Snowy";
import { useHistory } from "react-router-dom";

function Stats(props) {
  const {
    overlapGroup4,
    logoShapes7,
    roadwhiz,
    overview,
    group,
    store,
    statistics,
    iconFolder,
    courses,
    text,

    overlapGroup5,
    title,
    welcomeBackCustom,
    mesh08,
    yourLastTripToEndingLocation,
    betterThan86OfDrivers,
    i,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    surname,
    text1,
    snowCloud,
    rainyDay,
    clearDay,
    distance,
    fuelConsumption,
    timeSpent,
    overlapGroup10,
    routeTaken,
    youListenedTo,
    viewPlaylist,
    pop,
    maskGroup,
    ellipse2,
    line1,
    recommendations,
    insurancePercent,
    registerNow,
    getHeatedSeating,
    availADiscountNow,
    vuesaxboldelement3Props,
    clientInfo,
    setClientInfo
  } = props;

  console.log("DESKTOP PROPS", clientInfo)

  const history = useHistory();
  const backToHomepage = () => {
    history.push("/");
    setClientInfo(null);
  }

  const backToOverview = () => {
    history.push("/desktop-1");
  }

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1 screen">
        <div className="overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <div className="flex-col">
            <div className="flex-row">
              <div className="flex-col-1">
                <img className="logo-shapes-7" src={logoShapes7} alt="Logo Shapes 7" />
                <Vuesaxboldelement3 />
              </div>
              <div className="flex-col-2">
                <div className="road-whiz" onClick={backToOverview}>{roadwhiz}</div>
                <div className="overview" onClick={backToOverview}>{overview}</div>
              </div>
            </div>
            <div className="group-173">
              <img className="group" src={group} alt="Group" />
              <div className="store">{store}</div>
            </div>
            <div className="group-174">
              <Vuesaxboldelement3 className={vuesaxboldelement3Props.className} />
              <div className="statistics poppins-medium-black-16px">{statistics}</div>
            </div>
            <div className="overlap-group6">
              <div className="group-175">
                <img className="icon-folder" src={iconFolder} alt="icon-folder" />
                <div className="courses poppins-medium-black-16px">{courses}</div>
              </div>
              <div className="text poppins-medium-black-16px">{text}</div>
            </div>
            <div className="group-176">
              <Vuesaxlinearlogin />
              <div className="log-out poppins-medium-black-16px" onClick={backToHomepage}>log Out</div>
            </div>
          </div>
          <div className="overlap-group5" style={{ backgroundImage: `url(${overlapGroup5})` }}>
            <iframe width="760" height="950" src="https://lookerstudio.google.com/embed/reporting/48b408fa-c17b-47d9-8bfe-fd07668076ba/page/p_u1lvwfzk4c" allowfullscreen></iframe>
            <div className="overlap-group8">
              <img className="ellipse-2" src={ellipse2} alt="Ellipse 2" />
              <div className="cust0001 valign-text-middle">{clientInfo?.response?.Customer_ID}</div>
              <img className="line-1" src={line1} alt="Line 1" />
              <div className="flex-row-1">
                <div className="recommendations">{recommendations}</div>
                <div className="notif">
                  <Vuesaxlinearnotification />
                </div>
              </div>
              {clientInfo?.response?.INSURANCE_PREMIUM_DISCOUNT && <div className="group-container">
                <div className="group-15"></div>
                <div className="group-17">
                  <div className="overlap-group">
                    <div className="rectangle-1"></div>
                    <p className="you-have-availed-25 manrope-bold-mine-shaft-10px">{insurancePercent.replace('[insurancePercent]', clientInfo?.response?.INSURANCE_PREMIUM_DISCOUNT)}</p>
                    <div className="register-now manrope-normal-silver-10px">{registerNow}</div>
                  </div>
                </div>
              </div>}
              {clientInfo?.response?.Weather_conditions === snowCloud && <div className="group-container-1">
                <div className="group-17-1"></div>
                <div className="group-17">
                  <div className="overlap-group">
                    <div className="rectangle-1"></div>
                    <div className="get-heated-seating manrope-bold-mine-shaft-10px">{getHeatedSeating}</div>
                    <div className="avail-a-discount-now manrope-normal-silver-10px">{availADiscountNow}</div>
                  </div>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Stats;
