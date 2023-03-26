import React from "react";
import "../Store/Store.css";
import { useHistory } from "react-router-dom";

function Store(props) {
  const {
    overlapGroup7,
    logoShapes7,
    roadwhiz,
    vuesaxBoldElement3,
    overview,
    store,
    iconBar_Chart,
    statistics,
    iconFolder,
    courses,
    text,
    vuesaxLinearLogin,
    logOut,
    overlapGroup8,
    title,
    yourPersonalisedSt,
    image51,
    audioSystems,
    price1,
    buy1,
    image61,
    navigationSystem,
    price2,
    buy2,
    image71,
    usbChargingPort,
    price3,
    buy3,
    image52,
    sunRoof,
    price4,
    buy4,
    image62,
    itemName,
    price5,
    buy5,
    image72,
    parkingAssist,
    price6,
    buy6,
  } = props;

  const history = useHistory();
  const backToHomepage = () => {
    history.push("/");
    setClientInfo(null);
  }

  const backToOverview = () => {
    history.push("/desktop-1");
  }

  const goToStatisticsPage = () => {
    history.push("/stats");
  }
  const goToCoursesPage = () => {
    history.push("/courses");
  }

  const goToStorePage = () => {
    history.push("/store");
  }
  return (
    <div className="container-center-horizontal container-center-horizontal-store">
      <div className="store screen">
        <div className="overlap-group7-store" style={{ backgroundImage: `url(${overlapGroup7})` }}>
          <div className="flex-col-store">
            <div className="group-178-store">
              <img className="logo-shapes-7-store" src={logoShapes7} alt="Logo Shapes 7" />
              <div className="road-whiz" onClick={backToOverview}>{roadwhiz}</div>
            </div>
            <div className="group-177">
              <img className="vuesaxboldelement-3-store" src={vuesaxBoldElement3} alt="vuesax/bold/element-3" />
              <div className="overview-store" onClick={backToOverview}>{overview}</div>
            </div>
            <div className="group-2284">
              <img className="group" src="/img/group@2x.png" alt="Group" />
              <div className="store poppins-medium-black-16px" onClick={goToStorePage}>{store}</div>
            </div>
            <div className="group-174-store">
              <img className="icon-bar_chart" src={iconBar_Chart} alt="icon-bar_chart" />
              <div className="statistics-store poppins-medium-black-16px" onClick={goToStatisticsPage}>{statistics}</div>
            </div>
            <div className="overlap-group9-store">
              <div className="group-175-store">
                <img className="icon-folder" src={iconFolder} alt="icon-folder" />
                <div className="courses-store poppins-medium-black-16px" onClick={goToCoursesPage}>{courses}</div>
              </div>
              <div className="text-store poppins-medium-black-16px">{text}</div>
            </div>
            <div className="group-2282">
              <img className="vuesaxlinearlogin-store" src={vuesaxLinearLogin} alt="vuesax/linear/login" />
              <div className="log-out-store poppins-medium-black-16px" onClick={backToHomepage}>{logOut}</div>
            </div>
          </div>
          <div className="overlap-group8-store" style={{ backgroundImage: `url(${overlapGroup8})` }}>
            <h1 className="title">{title}</h1>
            <p className="your-personalised-st">{yourPersonalisedSt}</p>
            <div className="overlap-group-container-store">
              <div className="overlap-group-store">
                <img className="image" src={image51} alt="image 5" />
                <div className="flex-row-store">
                  <div className="flex-col-1-store poppins-medium-big-stone-15px">
                    <div className="audio-systems">{audioSystems}</div>
                    <div className="price">{price1}</div>
                  </div>
                  <div className="overlap-group-1-store">
                    <div className="buy poppins-medium-big-stone-15px">{buy1}</div>
                  </div>
                </div>
              </div>
              <div className="overlap-group-store">
                <img className="image" src={image61} alt="image 6" />
                <div className="flex-row-1-store">
                  <div className="flex-col-2-store poppins-medium-big-stone-15px">
                    <div className="navigation-system">{navigationSystem}</div>
                    <div className="price-1">{price2}</div>
                  </div>
                  <div className="overlap-group-1-store">
                    <div className="buy-1 poppins-medium-big-stone-15px">{buy2}</div>
                  </div>
                </div>
              </div>
              <div className="overlap-group-store">
                <img className="image" src={image71} alt="image 7" />
                <div className="flex-row-2">
                  <div className="flex-col-3-store poppins-medium-big-stone-15px">
                    <div className="usb-charging-port">{usbChargingPort}</div>
                    <div className="price-2">{price3}</div>
                  </div>
                  <div className="overlap-group-1-store">
                    <div className="buy-2 poppins-medium-big-stone-15px">{buy3}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-group-container-1">
              <div className="overlap-group-store">
                <img className="image" src={image52} alt="image 5" />
                <div className="flex-row-3">
                  <div className="flex-col-4 poppins-medium-big-stone-15px">
                    <div className="sun-roof">{sunRoof}</div>
                    <div className="price-3">{price4}</div>
                  </div>
                  <div className="overlap-group-1-store">
                    <div className="buy-3 poppins-medium-big-stone-15px">{buy4}</div>
                  </div>
                </div>
              </div>
              <div className="overlap-group-store">
                <img className="image" src={image62} alt="image 6" />
                <div className="flex-row-4">
                  <div className="flex-col-5 poppins-medium-big-stone-15px">
                    <div className="item-name">{itemName}</div>
                    <div className="price-4">{price5}</div>
                  </div>
                  <div className="overlap-group-1-store">
                    <div className="buy-4 poppins-medium-big-stone-15px">{buy5}</div>
                  </div>
                </div>
              </div>
              <div className="overlap-group-store">
                <img className="image" src={image72} alt="image 7" />
                <div className="flex-row-5">
                  <div className="flex-col-6 poppins-medium-big-stone-15px">
                    <div className="parking-assist">{parkingAssist}</div>
                    <div className="price-5">{price6}</div>
                  </div>
                  <div className="overlap-group-1-store">
                    <div className="buy-5 poppins-medium-big-stone-15px">{buy6}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
