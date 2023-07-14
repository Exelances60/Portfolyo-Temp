import React, { useContext, useState } from "react";
import "./ProjectPage.stlyes.scss";
import ProjectPageContainer from "../projectpage-container/ProjectPageContainer";
import { ThemaContext } from "../../context/darktheme.context";
import ProjectPageWindow from "../project-pageWindow/ProjectPageWindow1.jsx";

const ProjectPage = () => {
  const { openWindow, setOpenWindow, light } = useContext(ThemaContext);
  const [url, setUrl] = useState("");
  const [ımageAlt, setImageAlt] = useState();

  const openWindowHandler = (event) => {
    setOpenWindow(!openWindow);
    setImageAlt(Number(event.target.alt));
    setUrl(event.target.src);
  };

  console.log(ımageAlt);
  return (
    <div className={`project ${light ? "project" : "darkproject"}`}>
      <h2 className="project-title">PROJECTS</h2>

      <ProjectPageContainer
        light={light}
        openWindowHandler={openWindowHandler}
      ></ProjectPageContainer>

      <ProjectPageWindow
        openWindow={openWindow}
        openWindowHandler={openWindowHandler}
        url={url}
        ımageAlt={ımageAlt}
      ></ProjectPageWindow>
    </div>
  );
};

export default ProjectPage;
