import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import PropertyArea from "./components/propertyArea";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <PropertyArea />
      </React.Fragment>
    );
  }
}

export default App;
