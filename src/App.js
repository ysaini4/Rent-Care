import React, { Component } from "react";
import { Route, Redirect, Switch, Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/header";
import Home from "./components/home";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/home" exact />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
