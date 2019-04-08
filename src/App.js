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
          <Route path="/rent-care/home" component={Home} />
          <Route path="/rent-care/not-found" component={NotFound} />
          <Redirect from="/rent-care" to="/rent-care/home" exact />
          <Redirect to="/rent-care/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
