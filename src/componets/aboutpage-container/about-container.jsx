import React from "react";
import "./about-container.styles.scss";
import Image from "../../assets/da7732ac-8bab-4198-9ecd-7b7b0747a4e0.jpeg";
import Fade from "react-reveal/Fade";

const AboutContainer = () => {
  return (
    <>
      <Fade top duration={1500} distance="20%">
        <div className="about-container">
          <div className="about-image-container">
            <div className="about-img">
              <img src={Image} alt=""></img>
            </div>
            <div className="about-logos">
              <div className="lg-logos">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className="lg-logos">
                <i className="fa-brands fa-react"></i>
              </div>
              <div className="lg-logos">
                <i className="fa-brands fa-css3"></i>
              </div>
            </div>
          </div>
          <div className="about-decps">
            <div className="tex">
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="green"></div>
            </div>
            <div className="about-text">
              <h3>Hi :)</h3>
              <p>
                👋 Ben Enes Çelik Bilgi Üniversitesi bilgisayar programcılıgı
                ögrencisiyim Front end developer olarak web geliştiricisiyim.
                Dinamik web projeleri için geliştirme üzerine ⭐ HTML5, OOP,
                JavaScript, CSS, REACT dahil olmak üzere çok sayıda programlama
                dilinde bilgiliyim .⭐
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default AboutContainer;
