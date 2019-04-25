import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TextForm from "../comon/forms/TextForm";
import TextArea from "../comon/forms/TextArea";
import NextButton from "../comon/buttons/NextButton";
import isEmpty from "../comon/Utils/isEmpty";
import { setPersonalInfo } from "../../actions/cvActions";

export class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvName: "",
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      website: "",
      bio: ""
    };
  }

  componentDidMount() {
    const { personal } = this.props.personal;
    if (!isEmpty(personal)) {
      // Check if individual keys exists, if they dont: set empty string
      personal.cvName = isEmpty(personal.cvName) ? "" : personal.cvName;
      personal.firstName = isEmpty(personal.firstName)
        ? ""
        : personal.firstName;
      personal.lastName = isEmpty(personal.lastName) ? "" : personal.lastName;
      personal.address = isEmpty(personal.address) ? "" : personal.address;
      personal.email = isEmpty(personal.email) ? "" : personal.email;
      personal.website = isEmpty(personal.website) ? "" : personal.website;
      personal.bio = isEmpty(personal.bio) ? "" : personal.bio;

      this.setState({
        cvName: personal.cvName,
        firstName: personal.firstName,
        lastName: personal.lastName,
        address: personal.address,
        email: personal.email,
        website: personal.website,
        bio: personal.bio
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      cvName,
      firstName,
      lastName,
      address,
      email,
      website,
      bio
    } = this.state;
    return (
      <div className="mt-3" data-test="component-personal-info">
        <h3 className="text-center">
          <i className="fas fa-user-edit" /> Personal Information
        </h3>
        <div className="personal-forms form-group">
          <TextForm
            label="CV Name"
            labelFor="CVName"
            name="cvName"
            value={cvName}
            info="This is the name of this CV. Make it unique."
            onChange={this.onChange}
          />
          <TextForm
            label="First Name"
            labelFor="firstName"
            name="firstName"
            value={firstName}
            onChange={this.onChange}
          />
          <TextForm
            label="Last Name"
            labelFor="lastName"
            name="lastName"
            value={lastName}
            onChange={this.onChange}
          />
          <TextForm
            label="Address"
            labelFor="address"
            name="address"
            value={address}
            onChange={this.onChange}
          />
          <TextForm
            label="Email"
            labelFor="email"
            name="email"
            value={email}
            onChange={this.onChange}
          />
          <TextForm
            label="Website"
            labelFor="website"
            type="website"
            name="website"
            value={website}
            onChange={this.onChange}
          />
          <TextArea
            maxlength={300}
            label="Bio"
            placeholder="Describe yourself in simple words"
            labelFor="bio"
            info="Max: 300 characters"
            name="bio"
            value={bio}
            onChange={this.onChange}
          />
          <NextButton action={this.props.setPersonalInfo} />
        </div>
      </div>
    );
  }
}

PersonalInfo.propTypes = {
  setPersonalInfo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  personal: state.personal
});

export default connect(
  mapStateToProps,
  { setPersonalInfo }
)(PersonalInfo);
