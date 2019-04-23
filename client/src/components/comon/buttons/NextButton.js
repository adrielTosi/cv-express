import React from "react";
import PropTypes from "prop-types";

const NextButton = ({ action }) => (
  <div class="next-button" data-test="component-next-button">
    <button type="button" onClick={action}>
      Next <i class="fas fa-chevron-right" />
    </button>
  </div>
);

NextButton.propTypes = {
  action: PropTypes.func.isRequired
};

export default NextButton;
