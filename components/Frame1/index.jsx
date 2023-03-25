import React from "react";
import "./Frame1.css";

function Frame1(props) {
  const { text1, sunny, className } = props;

  return (
    <div className="container-center-horizontal">
      <div className={`clear screen ${className || ""}`}>
        <div className="overlap-group1-4">
          <div className="overlap-group-8">
            <div className="text-4 jost-extra-bold-white-45px">{text1}</div>
            <div className="sunny poppins-medium-cararra-15px">{sunny}</div>
          </div>
          <div className="sun-cloud">
            <div className="sun">
              <div className="overlap-group-9">
                <div className="base-color"></div>
                <div className="inner-shadow-left"></div>
                <div className="inner-shadow-right"></div>
                <div className="yellow-tone"></div>
                <div className="light"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame1;
