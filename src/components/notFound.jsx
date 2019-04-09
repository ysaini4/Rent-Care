import React, { Component } from "react";
import loadInit from "../utility/loadInit";

class NotFound extends Component {
  state = {};
  componentDidMount() {
    loadInit(window.$, window.google);
  }
  render() {
    return (
      <section className="section-gap relative top-section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 header-text">
              <h1>Not Found</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NotFound;
