import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TextForm from "../comon/forms/TextForm";
import NextButton from "../comon/buttons/NextButton";
import BackButton from "../comon/buttons/BackButton";
import AddButton from "../comon/buttons/AddButton";
import MapSkills from "./MapSkills";
import { setSkillsInfo } from "../../actions/cvActions";
import isEmpty from "../comon/Utils/isEmpty";

export class SkillsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      skillName: "",
      knowledge: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddSkill = () => {
    // Split CSV into array
    let { knowledge } = this.state;
    knowledge = knowledge.split(",");
    // Create new skill group
    const { skillName } = this.state;
    const newSkillGroup = {
      skillName,
      knowledge
    };
    // Create new complete skills array
    const { skills } = this.state;
    const newSkills = [...skills, newSkillGroup];
    // Set new skills to state
    this.setState({ skills: newSkills });
  };

  handleSetSkillsInfo = () => {
    const { skills } = this.state;
    this.props.setSkillsInfo(skills);
  };

  componentDidMount() {
    const { skills } = this.props.skills;
    this.setState({ skills });
  }

  render() {
    const { skills, skillName, knowledge } = this.state;

    // Check if there are skills listed in state, if there are: invoque MapSkills
    const listContent = isEmpty(skills) ? (
      <div data-test="no-skills-yet-message">
        <h3>No skills yet</h3>
      </div>
    ) : (
      <MapSkills skills={skills} />
    );
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
            placeholder="Branding strategy,Ads,Sales"
            info="Use Comma Separated Values with no spaces between each one."
            onChange={this.onChange}
          />
        </div>
        <AddButton handleAdd={this.handleAddSkill} />
        <div className="skill-list">{listContent}</div>
        <div className="navigation-buttons">
          <BackButton route="create-cv/personal" />
          <NextButton action={this.handleSetSkillsInfo} />
        </div>
      </div>
    );
  }
}

SkillsInfo.propTypes = {
  setSkillsInfo: PropTypes.func.isRequired,
  skills: PropTypes.object
};

const mapStateToProps = state => ({
  skills: state.skills
});
export default connect(
  mapStateToProps,
  { setSkillsInfo }
)(SkillsInfo);
