import React, { Component } from "react";
import Banner from "./banner";
import PropertyArea from "./propertyArea";
import loadInit from "../../utility/loadInit";
class Home extends Component {
  componentDidMount() {
    loadInit();
  }
  render() {
    return (
      <React.Fragment>
        <Banner />
        <PropertyArea />
      </React.Fragment>
    );
  }
}

export default Home;
