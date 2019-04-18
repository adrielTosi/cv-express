import React, { Component } from "react";
import PropTypes from "prop-types";

class TextForm extends Component {
  render() {
    const {
      type,
      label,
      placeholder,
      labelFor,
      info,
      name,
      value,
      onChange
    } = this.props;
    return (
      <div className="personal-forms" data-test="component-text-form">
        <label for={labelFor}>{label}</label>
        <input
          name={name}
          value={value}
          type={type}
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

TextForm.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  info: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

TextForm.defaultProps = {
  type: "text"
};

export default TextForm;
