import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="side-bar text-center m-3">
        <Link to="/create-cv" class="btn btn-secundary btn-sm mt-4">
          + Create CV
        </Link>
        <br />
        <Link to="/" class="btn btn-secundary btn-sm my-4">
          My CVs
        </Link>
      </div>
    );
  }
}

export default Sidebar;
