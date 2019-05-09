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
    let stateList = this.state.stateDist.sort(sortState).map(item => {
      return (
        <option key={item.state.name} value={item.state.name}>
          {item.state.name}
        </option>
      );
    });
    return this.props.removeLabel
      ? [
          <option key={0} value={0}>
            Select State
          </option>,
          ...stateList
        ]
      : stateList;
  };
  distOptions = () => {
    if (this.state.currentDistList) {
      let distList = this.state.currentDistList.sort(sortDist).map(item => {
        return (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        );
      });
      return this.props.removeLabel
        ? [
            <option key={0} value={0}>
              Select Dist
            </option>,
            ...distList
          ]
        : distList;
    }
    return "";
  };
  changeState = input => {
    if (this.props.handleStateChange) {
      this.props.handleStateChange(input.value);
    }
    this.setState({ selectedState: input.value });
    let currentState = this.state.stateDist.find(item => {
      return item.state.name === input.value;
    });
    let currentDistList = "";
    if (currentState) currentDistList = currentState.state.dist;
    this.setState({ currentDistList });
  };
  changeDist = input => {
    if (this.props.handleDistChange) {
      this.props.handleDistChange(input.value);
    }
  };
  render() {
    let divClass = this.props.divClass ? this.props.divClass : "col-md-4 mb-3";
    return (
      <React.Fragment>
        <div className={divClass}>
          <Select
            id="state"
            name="State"
            label="State"
            removeLabel={this.props.removeLabel}
            required={true}
            valid={true}
            oType="optionlist"
            onChange={this.changeState}
            options={this.stateOptions()}
            feedback="Required."
          />
        </div>
        <div className={divClass}>
          <Select
            id="district"
            name="District"
            label="District"
            removeLabel={this.props.removeLabel}
            required={true}
            valid={true}
            oType="optionlist"
            onChange={this.changeDist}
            options={this.distOptions()}
            feedback="Required."
          />
        </div>
      </React.Fragment>
    );
  }
}

export default StateDist;
