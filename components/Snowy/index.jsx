import React from "react";
import "./Snowy.css";

function Snowy(props) {
  const { surname, text1, snowCloud } = props;

  return (
    <div className="container-center-horizontal">
      <div className="snowy screen">
        <div className="overlap-group-7">
          <div className="rectangle-31-1"></div>
          <div className="surname-1 poppins-medium-cararra-15px">{surname}</div>
          <h1 className="text-3 jost-extra-bold-white-45px">{text1}</h1>
          <img className="snow-cloud-1" src={snowCloud} alt="Snow Cloud" />
        </div>
      </div>
    </div>
  );
}

export default Snowy;
