import React, { useContext } from "react";
import "./entryPage.styles.scss";
import HomeLogo from "../homepage-logo/home-logo";
import HomeTyper from "../homepage-typer/home-typer";
import HomeLightmode from "../homepage-lightmode/home-lightmode";
import { ThemaContext } from "../../context/darktheme.context";
const EntryPage = () => {
  const { light } = useContext(ThemaContext);
  return (
    <div className={`home  ${light ? "home" : "darkhome"}`}>
      <HomeLogo></HomeLogo>
      <HomeTyper></HomeTyper>
      <HomeLightmode></HomeLightmode>
    </div>
  );
};

export default EntryPage;
