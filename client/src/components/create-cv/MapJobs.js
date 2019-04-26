import React from "react";

const MapJobs = ({ jobs }) => {
  const content = (
    <ol>
      {jobs.map((item, index) => (
        <li key={index}>
          <div className="skill-list-item">
            <h3>Name: {item.jobName}</h3>
            <h3>Link: {item.link}</h3>
            <h3>Description: {item.description}</h3>
          </div>
        </li>
      ))}
    </ol>
  );
  return <div data-test="component-map-jobs">{content}</div>;
};

export default MapJobs;
