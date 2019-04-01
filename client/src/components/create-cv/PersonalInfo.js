import React, { Component } from "react";
import TextForm from "../comon/forms/TextForm";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvName: "",
      name: "",
      address: "",
      email: "",
      website: "",
      bio: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { cvName, address, email, website, bio } = this.state;
    return (
      <div className="mt-3">
        <h3 className="text-center">
          <i class="fas fa-user-edit" /> Personal Information
        </h3>
        <div className="personal-forms form-group">
          <TextForm
            label="CV Name"
            labelFor="CVName"
            type="text"
            name="cvName"
            value={cvName}
            info="This is the name of this CV. Make it unique."
            onChange={this.onChange}
          />
          <TextForm
            label="Address"
            labelFor="address"
            type="text"
            name="address"
            value={address}
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
          <TextForm
            label="Bio"
            labelFor="bio"
            type="bio"
            name="bio"
            value={bio}
            onChange={this.onChange}
            info="A few words about yourself. Make it small."
          />
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
