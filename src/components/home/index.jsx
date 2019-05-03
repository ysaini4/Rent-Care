import React, { Component } from "react";
import Banner from "./banner";
import PropertyArea from "./propertyArea";
import loadInit from "../../utility/loadInit";
import { searchProperty } from "../../services/property";

class Home extends Component {
  state = { properties: [] };
  componentDidMount() {
    loadInit();
    this.getProperties();
  }
  getProperties = async () => {
    try {
      let data = { Publish: true, ShowAtHome: true };
      let properties = await searchProperty(data);
      this.setState({ properties });
    } catch (err) {
      console.log("err", err);
    }
  };
  render() {
    return (
      <React.Fragment>
        <Banner />
        <PropertyArea properties={this.state.properties} />
      </React.Fragment>
    );
  }
}

export default Home;
