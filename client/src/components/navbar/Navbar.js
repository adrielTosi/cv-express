import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expanded-lg navbar-dark bg-primary">
        <a className="navbar-brand ml-4">CV Express</a>

        <button
          className="navbar-toggler mr-4"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Contact <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
