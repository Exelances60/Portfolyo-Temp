import { useContext } from "react";
import "./App.css";
import AboutPage from "./componets/About-page/about-page";

import EntryPage from "./componets/entry-page/entryPage";
import ProjectPage from "./componets/project-page/ProjectPage";
import { ThemaContext } from "./context/darktheme.context";
import SkillsPage from "./componets/Skills-Page/SkillsPage";

function App() {
  const { openWindow } = useContext(ThemaContext);
  return (
    <div className="App w-full md:w-full h-100vh ">
      <div className={`${openWindow ? "overlay" : "overlay-open"}`}> </div>
      <EntryPage></EntryPage>
      <AboutPage></AboutPage>
      <ProjectPage></ProjectPage>
      <SkillsPage></SkillsPage>
    </div>
  );
}

export default App;
