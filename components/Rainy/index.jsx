import React from "react";
import "./Rainy.css";

function Rainy(props) {
  const { text1, rainy, rainCloud } = props;

  return (
    <div className="container-center-horizontal">
      <div className="rainy screen">
        <div className="overlap-group1-rainy">
          <div className="group-169">
            <div className="group-167">
              <div className="overlap-group-rainy">
                <div className="text-1-rainy">{text1}</div>
                <div className="rainy-1 poppins-medium-cararra-15px">{rainy}</div>
              </div>
            </div>
          </div>
          <img className="rain-cloud" src={rainCloud} alt="Rain Cloud" />
        </div>
      </div>
    </div>
  );
}

export default Rainy;
