import React, { Component } from "react";
import Banner from "./banner";
import SelectedProperty from "./selectedProperty";

class AddProperty extends Component {
  state = {
    propertyType: [
      { id: 0, lable: "Select Property Type" },
      { id: 1, lable: "Corporate Property" },
      { id: 2, lable: "Commercial Property" },
      { id: 3, lable: "Residential Property" }
    ],
    selectedComponentId: 1
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
            <SelectedProperty componentId={this.state.selectedComponentId} />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AddProperty;
