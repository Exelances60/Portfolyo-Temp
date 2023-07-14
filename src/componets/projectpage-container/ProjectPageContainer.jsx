import React from "react";
import "./ProjectPageContainer.styles.scss";
import Image1 from "../../assets/Screenshot_4.png";
import Image2 from "../../assets/5.png";
import Image3 from "../../assets/3.png";
import Fade from "react-reveal/Fade";

const ProjectPageContainer = ({ openWindowHandler, light }) => {
  return (
    <>
      {" "}
      <Fade top duration={3000} distance="20%">
        <div className="project-container" onClick={openWindowHandler}>
          <div
            className={`project-container-in ${
              light ? "project-container-in" : "darkmode"
            }`}
          >
            <div className="project-container-img">
              <img src={Image1} alt={1}></img>
            </div>
            <div className="project-container-date">2023</div>
            <div className="project-container-name">
              <span>Weather App</span>
            </div>
          </div>
          <div className="project-container-in">
            <div className="project-container-img">
              <img src={Image2} alt={2}></img>
            </div>
            <div className="project-container-date">2023</div>
            <div className="project-container-name">
              <span>Bankist</span>
            </div>
          </div>
          <div className="project-container-in">
            <div className="project-container-img">
              <img src={Image3} alt={3}></img>
            </div>
            <div className="project-container-date">2023</div>
            <div className="project-container-name">
              <span>Clothing E-Shop</span>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default ProjectPageContainer;
