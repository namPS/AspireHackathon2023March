import React from "react";
import "../Courses/Courses.css";
import { useHistory } from "react-router-dom";

function Courses(props) {
  const {
    overlapGroup4,
    logoShapes7,
    roadwhiz,
    vuesaxBoldElement3,
    overview,
    group,
    store,
    iconBar_Chart,
    statistics,
    iconFolder,
    courses,
    text,
    vuesaxLinearLogin,
    logOut,
    overlapGroup5,
    title,
    coursesToHelpYou,
    image51,
    trafficLawsRecap,
    enroll1,
    image52,
    stayingFocusedSimulation,
    enroll2,
    image53,
    takingCarOfYourCar,
    enroll3,
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
    <div className="container-center-horizontal">
      <div className="desktop-2 screen">
        <div className="overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <div className="flex-col">
            <div className="group-178">
              <img className="logo-shapes-7" src={logoShapes7} alt="Logo Shapes 7" />
              <div className="road-whiz" onClick={backToOverview}>{roadwhiz}</div>
            </div>
            <div className="group-2285">
              <img className="vuesaxboldelement-3" src={vuesaxBoldElement3} alt="vuesax/bold/element-3" />
              <div className="overview poppins-medium-black-16px" onClick={backToOverview}>{overview}</div>
            </div>
            <div className="group-2284">
              <img className="group" src={group} alt="Group" />
              <div className="store poppins-medium-black-16px" onClick={goToStorePage}>{store}</div>
            </div>
            <div className="group-2283">
              <img className="icon-bar_chart" src={iconBar_Chart} alt="icon-bar_chart" />
              <div className="statistics poppins-medium-black-16px" onClick={goToStatisticsPage}>{statistics}</div>
            </div>
            <div className="flex-row-courses">
              <img className="icon-folder" src={iconFolder} alt="icon-folder" />
              <div className="flex-col-1-courses">
                <div className="courses">{courses}</div>
                <div className="text poppins-medium-black-16px">{text}</div>
              </div>
            </div>
            <div className="flex-row-1-courses">
              <img className="vuesaxlinearlogin" src={vuesaxLinearLogin} alt="vuesax/linear/login" />
              <div className="log-out poppins-medium-black-16px" onClick={backToHomepage}>{logOut}</div>
            </div>
          </div>
          <div className="overlap-group5-courses" style={{ backgroundImage: `url(${overlapGroup5})` }}>
            <h1 className="title">{title}</h1>
            <p className="courses-to-help-you">{coursesToHelpYou}</p>
            <div className="overlap-group-container">
              <div className="overlap-group-1-courses">
                <img className="image-5" src={image51} alt="image 5" />
                <div className="traffic-laws-recap poppins-medium-big-stone-15px">{trafficLawsRecap}</div>
                <div className="overlap-group-courses">
                  <div className="enroll poppins-medium-big-stone-15px">{enroll1}</div>
                </div>
              </div>
              <div className="overlap-group2-courses">
                <img className="image-5-1" src={image52} alt="image 5" />
                <div className="staying-focused-simulation poppins-medium-big-stone-15px">
                  {stayingFocusedSimulation}
                </div>
                <div className="overlap-group-2-courses">
                  <div className="enroll poppins-medium-big-stone-15px">{enroll2}</div>
                </div>
              </div>
              <div className="overlap-group3-courses">
                <img className="image-5" src={image53} alt="image 5" />
                <p className="taking-car-of-your-car poppins-medium-big-stone-15px">{takingCarOfYourCar}</p>
                <div className="overlap-group-courses">
                  <div className="enroll poppins-medium-big-stone-15px">{enroll3}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
