import React from "react";

const MapEducation = ({ education }) => {
  const content = (
    <ol>
      {education.map((item, index) => (
        <li key={index}>
          <div className="skill-list-item">
            <h3>Degree: {item.degree}</h3>
            <h3>From: {item.fromDate}</h3>
            <h3>To: {item.toDate}</h3>
            <h3>Local of Study: {item.local}</h3>
            {item.link ? <h3>link: {item.link}</h3> : null}
          </div>
        </li>
      ))}
    </ol>
  );
  return <div data-test="component-map-education">{content}</div>;
};

export default MapEducation;
