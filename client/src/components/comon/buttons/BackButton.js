import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BackButton = ({ route }) => (
  <div className="back-button" data-test="component-back-button">
    <button type="button">
      <Link to={`/${route}`}>
        {" "}
        <i className="fas fa-chevron-left" /> Back
      </Link>
    </button>
  </div>
);

BackButton.propTypes = {
  route: PropTypes.string.isRequired
};

export default BackButton;
