import React from "react";
import PropTypes from "prop-types";

const MapSkills = ({ skills }) => {
  const content = (
    <ol>
      {skills.map((item, index) => (
        <li key={index}>
          <div className="skill-list-item">
            <h3>{item.skillName}</h3>
            <h3>{item.knowledge.join(", ")}</h3>
          </div>
        </li>
      ))}
    </ol>
  );
  return <div data-test="component-map-skills">{content}</div>;
};

MapSkills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skillName: PropTypes.string,
      knowledge: PropTypes.array
    })
  ).isRequired
};

export default MapSkills;
