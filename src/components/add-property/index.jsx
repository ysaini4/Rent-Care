import React, { Component } from "react";
import Banner from "./banner";
import AddPropertyForm from "./addpropertyform";
import { propertyTypes } from "../../utility/common";

class AddProperty extends Component {
  state = {
    propertyType: propertyTypes,
    selectedComponentId: 0
  };

  selectProperty(input) {
    this.setState({ selectedComponentId: parseInt(input.value) });
  }

  render() {
    const pId = this.props.match.params.id
      ? parseInt(this.props.match.params.id)
      : this.state.selectedComponentId;

    return (
      <React.Fragment>
        <Banner />
        <section className="section-gap relative ">
          <div className="container">
            <h4 style={{ marginBottom: 20 }}>Add Your Property</h4>
            <select
              className="form-control"
              style={{ marginBottom: 20 }}
              disabled={this.props.match.params.id}
              onChange={({ currentTarget: input }) =>
                this.selectProperty(input)
              }
              value={pId}
            >
              {this.state.propertyType.map(pItem => (
                <option key={pItem.id} value={pItem.id}>
                  {pItem.lable}
                </option>
              ))}
            </select>
            <AddPropertyForm
              pTypeId={this.state.selectedComponentId}
              paramPId={pId}
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AddProperty;
