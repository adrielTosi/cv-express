import React, { Component } from "react";
import PropTypes from "prop-types";

import TextForm from "../comon/forms/TextForm";
import NextButton from "../comon/buttons/NextButton";
import BackButton from "../comon/buttons/BackButton";

class SkillsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: {},
      skillName: "",
      knowledge: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { skillName, knowledge } = this.state;
    return (
      <div data-test="component-skills-info">
        <div className="skills-form form-group">
          <TextForm
            name="skillName"
            value={skillName}
            label="Skill Name"
            labelFor="Skill name"
            placeholder="Marketing"
            onChange={this.onChange}
          />
          <TextForm
            name="knowledge"
            value={knowledge}
            label="Knowledge"
            labelFor="Knowledge"
            placeholder="Branding,Ads,Sales"
            info="Use Comma Separated Values with no spaces."
            onChange={this.onChange}
          />
        </div>
        <BackButton route="create-cv/personal" />
        <NextButton action={this.props.setSkillsInfo} />
      </div>
    );
  }
}

SkillsInfo.propTypes = {
  setSkillsInfo: PropTypes.func.isRequired,
  skills: PropTypes.object
};
export default SkillsInfo;
