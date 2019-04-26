import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TextForm from "../comon/forms/TextForm";
import TextArea from "../comon/forms/TextArea";
import NextButton from "../comon/buttons/NextButton";
import BackButton from "../comon/buttons/BackButton";
import AddButton from "../comon/buttons/AddButton";
import MapJobs from "./MapJobs";
import { setJobsInfo } from "../../actions/cvActions";
import isEmpty from "../comon/Utils/isEmpty";

export class JobsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      jobName: "",
      link: "",
      description: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddJob = () => {
    // Create new Job Group
    const { jobName, link, description } = this.state;
    const newJobGroup = { jobName, link, description };
    // Create new complete Jobs array
    const { jobs } = this.state;
    const newJobs = [...jobs, newJobGroup];
    // Set new complete Jobs array to state
    this.setState({ jobs: newJobs });
  };

  handleSetJobsInfo = () => {
    const { jobs } = this.state;
    this.props.setJobsInfo(jobs);
  };

  componentDidMount() {
    const { jobs } = this.props.jobs;
    this.setState({ jobs: jobs });
  }

  render() {
    const { jobs, jobName, link, description } = this.state;
    // Check if there are jobs listed in state, if there are: invoque MapJobs
    const listContent = isEmpty(jobs) ? (
      <div data-test="no-jobs-yet-message">
        <h3>No jobs yet</h3>
      </div>
    ) : (
      <MapJobs jobs={jobs} />
    );
    return (
      <div className="jobs-info" data-test="component-jobs-info">
        <div className="jobs-form form-group">
          <TextForm
            name="jobName"
            value={jobName}
            label="Job Name"
            labelFor="Job name"
            placeholder="Marketing Director"
            onChange={this.onChange}
          />
          <TextForm
            name="link"
            value={link}
            label="link"
            type="url"
            labelFor="link"
            placeholder="http://company.com"
            info="Your company website, your project URL or any other link."
            onChange={this.onChange}
          />
          <TextArea
            maxlength={1000}
            label="description"
            placeholder="Describe your job/project."
            labelFor="description"
            info="Max: 1000 characters"
            name="description"
            value={description}
            onChange={this.onChange}
          />
        </div>
        <AddButton handleAdd={this.handleAddJob} />
        <div className="skill-list">{listContent}</div>
        <div className="navigation-buttons">
          <BackButton route="create-cv/personal" />
          <NextButton action={this.handleSetJobsInfo} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  jobs: state.jobs
});

JobsInfo.propTypes = {
  setJobsInfo: PropTypes.func.isRequired,
  jobs: PropTypes.object
};

export default connect(
  mapStateToProps,
  { setJobsInfo }
)(JobsInfo);
