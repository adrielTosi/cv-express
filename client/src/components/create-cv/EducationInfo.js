import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TextForm from "../comon/forms/TextForm";
import NextButton from "../comon/buttons/NextButton";
import BackButton from "../comon/buttons/BackButton";
import AddButton from "../comon/buttons/AddButton";
import MapEducation from "./MapEducation";
import { setEducationInfo } from "../../actions/cvActions";
import isEmpty from "../comon/Utils/isEmpty";

export class EducationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [],
      degree: "",
      fromDate: "",
      toDate: "",
      local: "",
      link: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddEducation = () => {
    // Create new Education Group
    const { degree, fromDate, toDate, local, link } = this.state;
    const newEducationGroup = { degree, fromDate, toDate, local, link };
    // Create new complete Education array
    const { education } = this.state;
    const newEducation = [...education, newEducationGroup];
    // Set new complete Education array to state
    this.setState({ education: newEducation });
  };

  handleSetEducationInfo = () => {
    const { education } = this.state;
    this.props.setEducationInfo(education);
  };

  componentDidMount() {
    const { education } = this.props.education;
    this.setState({ education: education });
  }
  render() {
    const { education, degree, fromDate, toDate, local, link } = this.state;
    const listContent = isEmpty(education) ? (
      <div data-test="no-education-yet-message">
        <h3>No education yet</h3>
      </div>
    ) : (
      <MapEducation education={education} />
    );
    return (
      <div data-test="component-education-info">
        <div className="education-form form-group">
          <TextForm
            name="degree"
            value={degree}
            label="education Name"
            labelFor="education name"
            placeholder="Marketing Director"
            onChange={this.onChange}
          />
          <TextForm
            name="fromDate"
            value={fromDate}
            label="fromDate"
            type="date"
            labelFor="fromDate"
            onChange={this.onChange}
          />
          <TextForm
            name="toDate"
            value={toDate}
            label="toDate"
            type="date"
            labelFor="toDate"
            onChange={this.onChange}
          />
          <TextForm
            name="local"
            value={local}
            label="local"
            labelFor="local"
            onChange={this.onChange}
          />
          <TextForm
            name="link"
            value={link}
            label="link"
            type="url"
            labelFor="link"
            onChange={this.onChange}
          />
        </div>
        <AddButton handleAdd={this.handleAddEducation} />
        <div className="skill-list">{listContent}</div>
        <div className="navigation-buttons">
          <BackButton route="create-cv/jobs" />
          <NextButton action={this.handleSetEducationInfo} />
        </div>
      </div>
    );
  }
}

EducationInfo.propTypes = {
  education: PropTypes.object,
  setEducationInfo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  education: state.education,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { setEducationInfo }
)(EducationInfo);
