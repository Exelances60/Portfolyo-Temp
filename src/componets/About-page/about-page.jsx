import React, { useContext } from "react";
import "./about-page.styles.scss";
import AboutContainer from "../aboutpage-container/about-container";
import { ThemaContext } from "../../context/darktheme.context";
import Fade from "react-reveal/Fade";
const AboutPage = () => {
  const { light } = useContext(ThemaContext);
  return (
    <div className={`about ${light ? "about" : "aboutDarkMode"}`}>
      <Fade top>
        <div className="about-title">
          <h1 className="about-h1">ABOUT ME</h1>
        </div>
      </Fade>

      <AboutContainer></AboutContainer>
    </div>
  );
};

export default AboutPage;
