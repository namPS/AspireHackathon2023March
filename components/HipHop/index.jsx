import React from "react";
import "./HipHop.css";

function HipHop(props) {
  const { youListenedTo, viewPlaylist, title, maskGroup, className } = props;

  return (
    <div className="container-center-horizontal">
      <div className={`classical screen ${className || ""}`}>
        <div className="overlap-group-1">
          <div className="you-listened-to-1 poppins-medium-cararra-15px">{youListenedTo}</div>
          <div className="view-playlist-1 poppins-medium-cararra-15px">{viewPlaylist}</div>
          <h1 className="title-1 jost-extra-bold-white-45px">{title}</h1>
          <img className="mask-group-1" src={maskGroup} alt="Mask group" />
          <div className="rectangle-42"></div>
        </div>
      </div>
    </div>
  );
}

export default HipHop;
