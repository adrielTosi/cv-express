import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/navbar/Sidebar";
import MyCvs from "./components/my-cvs/MyCvs";
import PersonalInfo from "./components/create-cv/PersonalInfo";
import store from "./store";

import "./style/bootstrap.min.css";
import "./style/style.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Navbar />
            <div className="container front-page">
              <Sidebar />
              <Route exact path="/" component={MyCvs} />
              <Route exact path="/create-cv" component={PersonalInfo} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
