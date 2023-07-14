import React, { useContext } from "react";
import "./home-lightmode.stlye.scss";
import { ThemaContext } from "../../context/darktheme.context";

const HomeLightmode = () => {
  const { light, setLight } = useContext(ThemaContext);
  const themeHandler = () => {
    setLight(!light);
  };
  return (
    <>
      <div className={`lightmode ${light ? "lightmode" : "darkmode"}`}>
        <div className={light ? "light" : "dark"} onClick={themeHandler}></div>
        <div className="moon">
          <i className="fa-solid fa-moon"></i>
        </div>
      </div>
    </>
  );
};

export default HomeLightmode;
