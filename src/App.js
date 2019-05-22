import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Header from "./components/header";
import Home from "./components/home";

import NotFound from "./components/notFound";
import AddProperty from "./components/add-property";
import RequestProperty from "./components/request-property";
import SingleProperty from "./components/single-property/index";
import Footer from "./components/footer";
class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/addproperty" component={AddProperty} exact />
          <Route path="/requestproperty" component={RequestProperty} exact />
          <Route path="/addproperty/:id" component={AddProperty} />
          <Route path="/property/:id" component={SingleProperty} exact />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/home" exact />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
