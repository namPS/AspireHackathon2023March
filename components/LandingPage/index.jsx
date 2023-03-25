import React from "react";
import "./LandingPage.css";
import axios from "axios";
import Overview from "../Overview";

function LandingPage(props) {
  const {
    overlapGroup1,
    rectangle1,
    title,
    overlapGroup,
    logoShapes7,
    mesh08,
    customerId,
    inputType,
    inputPlaceholder,
    login,
  } = props;

  const [clientData, setClientData] = React.useState(null);
  const [clientId, setClientId] = React.useState(null);

  const baseURL = "https://us-central1-burner-manchoud1.cloudfunctions.net/bbbhackathon";

  const fetchClientData = () => {
    if (clientId) {
      axios.post(baseURL, {
        // "Customer_ID": "000006"
        "Customer_ID": clientId
      })
        .then((response) => {
          setClientData(response.data);
        });
    }
    
  }

  console.log("clientId", clientId)
  console.log("clientData", clientData)

  return (
    <div className="container-center-horizontal">
      <div className="landing-page screen">
        <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <img className="rectangle-1" src={rectangle1} alt="Rectangle 1" />
          <h1 className="title">{title}</h1>
          <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <img className="logo-shapes-7" src={logoShapes7} alt="Logo Shapes 7" />
          </div>
          <div className="rectangle-32"></div>
          <img className="mesh-08" src={mesh08} alt="Mesh-08" />
          <div className="customer-id jost-bold-big-stone-24px">{customerId}</div>
          <input className="customer-id-1" name="customerid" placeholder={inputPlaceholder} type={inputType} onChange={(e) => setClientId(e.target.value)} required />
          <button className="login jost-bold-big-stone-24px" onClick={fetchClientData}>
            {login}
          </button> 
        </div>
      </div>
      {clientData &&
        <Overview
          driverScore={clientData.response.COMPOSITE_DRIVER_SCORE}
          driverScorePercent={clientData.response.COMPOSITE_DRIVER_SCORE_PERCENTILE}
          customerId={clientData.response.Customer_ID}
          driverCourseRecommendation={clientData.response.DRIVER_COURSE_RECOMMENDED}
          endingLocation={clientData.response.Ending_location}
          freqOfHardAcceleration={clientData.response.Frequency_of_hard_acceleration}
          freqOfHardBraking={clientData.response.Frequency_of_hard_braking}
          freqOfSuddenLaneChange={clientData.response.Frequency_of_sudden_lane_changes}
          insurancePremiumDiscount={clientData.response.INSURANCE_PREMIUM_DISCOUNT}
          lastTripDistance={clientData.response.LAST_TRIP_DISTANCE}
          lastTripTime={clientData.response.LAST_TRIP_TIME}
          routeTaken={clientData.response.Route_taken}
          speedingInstance={clientData.response.Speeding_incidents}
          startingLocation={clientData.response.Starting_location}
          trafficCon  dition={clientData.response.Traffic_conditions}
          weatherBasedRecommendation={clientData.response.WEATHER_BASED_RECOMMENDATION}
          weatherCondition={clientData.response.Weather_conditions}
      />}
    </div>
  );
}

export default LandingPage;
