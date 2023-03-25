import React from "react";
import "./Rock.css";

function Rock(props) {
  const { youListenedTo, place, viewPlaylist, maskGroup, className } = props;

  return (
    <div className="container-center-horizontal">
      <div className={`pop-1 screen ${className || ""}`}>
        <div className="overlap-group1">
          <div className="you-listened-to-3 poppins-medium-cararra-15px">{youListenedTo}</div>
          <h1 className="title-2 jost-extra-bold-white-45px">{place}</h1>
        </div>
        <div className="overlap-group-3">
          <div className="view-playlist-3 poppins-medium-cararra-15px">{viewPlaylist}</div>
          <img className="mask-group-3" src={maskGroup} alt="Mask group" />
          <div className="rectangle-40-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Rock;
