import React from "react";
import "./LandingPage.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
    setClientInfo
  } = props;

  const [clientData, setClientData] = React.useState(null);
  const [clientId, setClientId] = React.useState(null);

  const baseURL = "https://us-central1-burner-manchoud1.cloudfunctions.net/bbbhackathon";

  const fetchClientData = () => {
    if (clientId) {
      axios.post(baseURL, {
        // Example "Customer_ID": "000006"
        "Customer_ID": clientId
      })
        .then((response) => {
          setClientData(response.data);
          setClientInfo(response.data);
        });
    }

  }

  const history = useHistory();

  React.useEffect(() => {
    if (clientData) {
      history.push("/desktop-1");
    }
  }, [clientData])

  return (
    <div className="container-center-horizontal">
      <div className="landing-page screen">
        <div className="overlap-group1-6" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <img className="rectangle-1-1" src={rectangle1} alt="Rectangle 1" />
          <h1 className="title-4">{title}</h1>
          <div className="overlap-group-12" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <img className="logo-shapes-7-1" src={logoShapes7} alt="Logo Shapes 7" />
          </div>
          <div className="rectangle-32"></div>
          <img className="mesh-08-1" src={mesh08} alt="Mesh-08" />
          <div className="customer-id jost-bold-big-stone-24px">{customerId}</div>
          <input className="customer-id-1" name="customerid" placeholder={inputPlaceholder} type={inputType} onChange={(e) => setClientId(e.target.value)} required />
          <button className="login jost-bold-big-stone-24px" onClick={fetchClientData}>
            {login}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
