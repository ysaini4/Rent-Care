import React, { Component } from "react";
import Banner from "./banner";
import { propertyTypes } from "./designData";
import AddPropertyForm from "./addpropertyform";

class AddProperty extends Component {
  state = {
    propertyType: propertyTypes,
    selectedComponentId: 0
  };
  selectProperty(input) {
    this.setState({ selectedComponentId: parseInt(input.value) });
  }
  render() {
    return (
      <React.Fragment>
        <Banner />
        <section className="section-gap relative ">
          <div className="container">
            <h4 style={{ marginBottom: 20 }}>Add Your Property</h4>
            <select
              className="form-control"
              style={{ marginBottom: 20 }}
              onChange={({ currentTarget: input }) =>
                this.selectProperty(input)
              }
            >
              {this.state.propertyType.map(pItem => (
                <option key={pItem.id} value={pItem.id}>
                  {pItem.lable}
                </option>
              ))}
            </select>
            <AddPropertyForm pTypeId={this.state.selectedComponentId} />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AddProperty;
