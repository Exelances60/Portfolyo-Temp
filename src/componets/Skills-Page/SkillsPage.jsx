import React from "react";
import "./SkillsPage.styles.scss";
import SkillsContainer from "../Skills-PageContainer/SkillsContainer";

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <h2>SKILLS</h2>
      <SkillsContainer></SkillsContainer>
    </div>
  );
};

export default SkillsPage;
