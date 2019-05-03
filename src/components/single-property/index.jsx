import React, { Component } from "react";
import Banner from "./banner";
import Container from "./container";
import { homeProperties } from "../../services/defaultLoad";
import { searchProperty } from "../../services/property";
import { getDisplayFields } from "./designData";

class SingleProperty extends Component {
  state = { pageProperty: {}, displayFields: [] };
  componentDidMount() {
    this.getPageProperty();
  }
  getPageProperty = async () => {
    const pId = this.props.match.params.id;
    let pageProperty;
    if (homeProperties[0]) {
      pageProperty = homeProperties.filter(item => item._id === pId)[0];
    } else {
      let data = { _id: pId };
      let properties = await searchProperty(data);
      if (properties) {
        pageProperty = properties.filter(item => item._id === pId)[0];
      }
    }
    if (pageProperty) {
      const displayFields = getDisplayFields(pageProperty.Property);
      this.setState({ displayFields });
    }
    this.setState({ pageProperty });
  };
  render() {
    return (
      <React.Fragment>
        <Banner />
        <Container
          pageProperty={this.state.pageProperty}
          displayFields={this.state.displayFields}
        />
      </React.Fragment>
    );
  }
}

export default SingleProperty;
