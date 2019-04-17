import React, { Component } from "react";
import { stateDist } from "../../utility/places";
import Select from "../common/select";
import { sortState, sortDist } from "../../utility/common";
class StateDist extends Component {
  state = {
    stateDist: stateDist,
    selectedState: "",
    currentDistList: []
  };
  stateOptions = () => {
    return this.state.stateDist.sort(sortState).map(item => {
      return (
        <option key={item.state.name} value={item.state.name}>
          {item.state.name}
        </option>
      );
    });
  };
  distOptions = () => {
    if (this.state.currentDistList) {
      return this.state.currentDistList.sort(sortDist).map(item => {
        return (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        );
      });
    }
    return "";
  };
  changeState = input => {
    this.setState({ selectedState: input.value });
    let currentState = this.state.stateDist.find(item => {
      return item.state.name === input.value;
    });
    let currentDistList = "";
    if (currentState) currentDistList = currentState.state.dist;
    this.setState({ currentDistList });
  };
  changeDist = input => {};
  render() {
    return (
      <React.Fragment>
        <div className="col-md-4 mb-3">
          <Select
            id="state"
            name="state"
            label="State"
            required={true}
            valid={true}
            oType="optionlist"
            onChange={this.changeState}
            options={this.stateOptions()}
          />
        </div>
        <div className="col-md-4 mb-3">
          <Select
            id="district"
            name="dist"
            label="District"
            required={true}
            valid={true}
            oType="optionlist"
            onChange={this.changeDist}
            options={this.distOptions()}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default StateDist;
