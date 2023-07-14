import React, { useContext } from "react";
import "./home-typer.styles.scss";
import { Typewriter } from "react-simple-typewriter";
import { ThemaContext } from "../../context/darktheme.context";
const HomeTyper = () => {
  const { light } = useContext(ThemaContext);
  return (
    <>
      <h2>Enes Çelik</h2>
      <div className={`typer ${light ? "typer" : "darktyper"}`}>
        <span>
          <Typewriter
            words={["FRONT-END DEVELOPER", "COMPUTER PROGRAMMING STUDENT"]}
            loop="false"
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
    </>
  );
};

export default HomeTyper;
