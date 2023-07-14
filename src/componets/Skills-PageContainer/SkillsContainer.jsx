import React from "react";
import "./SkillsContainer.scss";
import SKILLS_DATA from "../../skılls_data";

const SkillsContainer = () => {
  const data = SKILLS_DATA;
  return (
    <div className="skills-container">
      {data.map((val) => {
        return (
          <div key={val.id} className="deneme">
            <div className="skills-in">
              <div className="skills-img">
                <img src={val.image} alt={val.name}></img>
              </div>
              <span>{val.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsContainer;
