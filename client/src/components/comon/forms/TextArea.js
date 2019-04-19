import React, { Component } from "react";
import PropTypes from "prop-types";

class TextArea extends Component {
  render() {
    const {
      maxlength,
      label,
      placeholder,
      labelFor,
      info,
      name,
      value,
      onChange
    } = this.props;
    return (
      <div className="personal-forms" data-test="component-text-area">
        <label for={labelFor}>{label}</label>
        <textarea
          name={name}
          value={value}
          maxlegth={maxlength}
          className="form-control"
          id={labelFor}
          placeholder={placeholder}
          onChange={onChange}
        />
        {info && <small data-test="info" className="form-text text-muted">{info}</small>}
      </div>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  info: PropTypes.string,
  maxlength: PropTypes.number,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

TextArea.defaultProps = {
  maxlength: 400
};

export default TextArea;