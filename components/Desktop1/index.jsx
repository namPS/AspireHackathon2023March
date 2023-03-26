import React from "react";
import Vuesaxboldelement3 from "../Vuesaxboldelement3";
import Vuesaxlinearlogin from "../Vuesaxlinearlogin";
import Vuesaxlinearnotification from "../Vuesaxlinearnotification";
import "./Desktop1.css";
import Rainy from "../Rainy";
import Snowy from "../Snowy";
import { useHistory } from "react-router-dom";
// import { HipHop } from '../HipHop';

function Desktop1(props) {
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
                <div className="overview">{overview}</div>
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
            <div className="flex-col-3">
              <h1 className="title">{title}</h1>
              <p className="welcome-back-custom">{welcomeBackCustom.replace('[CustomerID]', clientInfo?.response.Customer_ID)}</p>
              <div className="overlap-group11 poppins-medium-big-stone-15px">
                <div className="overlap-group7">
                  <img className="mesh-08" src={mesh08} alt="Mesh-08" />
                  <div className="x72-score jost-bold-big-stone-24px">Score: {clientInfo?.response?.COMPOSITE_DRIVER_SCORE}</div>
                  <p className="your-last-trip-to-ending-location jost-bold-big-stone-24px">
                    {clientInfo?.response.yourLastTripToEndingLocation}
                  </p>
                  <p className="better-than-86-of-drivers poppins-medium-big-stone-15px">{betterThan86OfDrivers.replace('[driverAverage]', clientInfo?.response?.COMPOSITE_DRIVER_SCORE_PERCENTILE)}</p>
                  <div className="rectangle-34"></div>
                  <div className="rectangle-38"></div>
                  <div className="rectangle-35"></div>
                  <div className="rectangle-39"></div>
                  <div className="rectangle-36"></div>
                  <div className="overlap-group2">
                    <div className="i">{i}</div>
                    <div className="ellipse-44"></div>
                  </div>
                  <div className="seat-belt-usage-good poppins-medium-white-15px">
                    <span className="poppins-medium-big-stone-15px">{spanText1}</span>
                    {clientInfo?.response?.SEATBELT_RATING === 'GOOD' && <span className="poppins-medium-fruit-salad-15px">{clientInfo?.response?.SEATBELT_RATING}</span>}
                    {clientInfo?.response?.SEATBELT_RATING === 'MODERATE' && <span className="poppins-medium-tangerine-15px">{clientInfo?.response?.SEATBELT_RATING}</span>}
                    {clientInfo?.response?.SEATBELT_RATING === 'POOR' && <span className="span1">{clientInfo?.response?.SEATBELT_RATING}</span>}
                  </div>
                  <div className="rapid-breaking-poor poppins-medium-white-15px">
                    <span className="poppins-medium-big-stone-15px">{spanText3}</span>
                    {clientInfo?.response?.HARD_BRAKING_RATING === 'GOOD' && <span className="poppins-medium-fruit-salad-15px">{clientInfo?.response?.HARD_BRAKING_RATING}</span>}
                    {clientInfo?.response?.HARD_BRAKING_RATING === 'MODERATE' && <span className="poppins-medium-tangerine-15px">{clientInfo?.response?.HARD_BRAKING_RATING}</span>}
                    {clientInfo?.response?.HARD_BRAKING_RATING === 'POOR' && <span className="span1">{clientInfo?.response?.HARD_BRAKING_RATING}</span>}
                  </div>
                  <div className="rapid-acceleration-moderate poppins-medium-white-15px">
                    <span className="poppins-medium-big-stone-15px">{spanText5}</span>
                    {clientInfo?.response?.ACCELERATION_RATING === 'GOOD' && <span className="poppins-medium-fruit-salad-15px">{clientInfo?.response?.ACCELERATION_RATING}</span>}
                    {clientInfo?.response?.ACCELERATION_RATING === 'MODERATE' && <span className="poppins-medium-tangerine-15px">{clientInfo?.response?.ACCELERATION_RATING}</span>}
                    {clientInfo?.response?.ACCELERATION_RATING === 'POOR' && <span className="span1">{clientInfo?.response?.ACCELERATION_RATING}</span>}
                  </div>
                  <div className="unsafe-lane-change-moderate poppins-medium-white-15px">
                    <span className="poppins-medium-big-stone-15px">{spanText7}</span>
                    {clientInfo?.response?.LANE_CHANGE_RATING === 'GOOD' && <span className="poppins-medium-fruit-salad-15px">{clientInfo?.response?.LANE_CHANGE_RATING}</span>}
                    {clientInfo?.response?.LANE_CHANGE_RATING === 'MODERATE' && <span className="poppins-medium-tangerine-15px">{clientInfo?.response?.LANE_CHANGE_RATING}</span>}
                    {clientInfo?.response?.LANE_CHANGE_RATING === 'POOR' && <span className="span1">{clientInfo?.response?.LANE_CHANGE_RATING}</span>}
                  </div>
                  <div className="vehicle-maintenance-good poppins-medium-white-15px">
                    <span className="poppins-medium-big-stone-15px">{spanText9}</span>
                    {clientInfo?.response?.Vehicle_Maintenance_RATING === 'GOOD' && <span className="poppins-medium-fruit-salad-15px">{clientInfo?.response?.Vehicle_Maintenance_RATING}</span>}
                    {clientInfo?.response?.Vehicle_Maintenance_RATING === 'MODERATE' && <span className="poppins-medium-tangerine-15px">{clientInfo?.response?.Vehicle_Maintenance_RATING}</span>}
                    {clientInfo?.response?.Vehicle_Maintenance_RATING === 'POOR' && <span className="span1">{clientInfo?.response?.Vehicle_Maintenance_RATING}</span>}
                  </div>

                  <div className="overlap-group3-weather">
                    <div className="rectangle-31"></div>
                    <div className="surname poppins-medium-cararra-15px">{surname}</div>
                    <div className="text-1 jost-extra-bold-white-45px">{text1}</div>
                    {clientInfo?.response?.Weather_conditions === snowCloud && <Snowy surname="Snow Shower" text1="-10°" snowCloud="/img/snow-cloud@2x.png" />}
                    {clientInfo?.response?.Weather_conditions === rainyDay && <Rainy text1="9°" rainy="Rainy" rainCloud="/img/rain-cloud@2x.png" />}
                    {clientInfo?.response?.Weather_conditions === clearDay && <img className="clear" src={clearDay} alt="Clear day" />}
                  </div>

                </div>
                <div className="distance">{distance}: {(clientInfo?.response?.LAST_TRIP_DISTANCE).toFixed(2)} miles</div>
                <div className="fuel-consumption">{fuelConsumption}: {(clientInfo?.response?.Total_Fuel_consumption).toFixed(2)} </div>
                <div className="time-spent">{timeSpent} : {(clientInfo?.response?.LAST_TRIP_TIME).toFixed(2)}</div>
                <div className="traffic-condition">{clientInfo?.response?.Traffic_conditions}</div>
                <div className="overlap-group10" style={{ backgroundImage: `url(${overlapGroup10})` }}>
                  <div className="rectangle-33"></div>
                  <div className="route-taken">{routeTaken}</div>
                </div>
              </div>
              <div className="overlap-group9">
                {/* {clientInfo?.response?.GENRE === 'hip-hop' && <HipHop
                  youListenedTo="You listened to"
                  viewPlaylist="View Playlist"
                  title="Hip-Hop"
                  maskGroup="/img/mask-group.png"
                  className="hiphop"
                />} */}

                <div className="rectangle-41"></div>
                <div className="you-listened-to poppins-medium-cararra-15px">{youListenedTo}</div>
                <div className="view-playlist poppins-medium-cararra-15px">{viewPlaylist}</div>
                <div className="pop jost-extra-bold-white-45px">{pop}</div>
                <img className="mask-group" src={maskGroup} alt="Mask group" />
                <div className="rectangle-40"></div>
              </div>
            </div>
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
    </div>
  );
}

export default Desktop1;
