import React, { Component } from "react";
import Banner from "./banner";
import PropertyArea from "./propertyArea";
import loadInit from "../../utility/loadInit";
import { searchProperty } from "../../services/property";
import { setHomeProperties } from "../../services/defaultLoad";
import { propertyTypes } from "../../utility/common";

class Home extends Component {
  state = {
    properties: [],
    propertyTypes: propertyTypes,
    priceValue: { min: 3, max: 5 },
    areaValue: { min: 50, max: 200 },
    stateValue: "",
    distValue: "",
    pForValue: "Rent",
    pTypeValue: "",
    searchTextValue: "",
    loading: false
  };
  componentDidMount() {
    loadInit();
    this.getProperties({ Publish: true, ShowAtHome: true });
  }

  handlePriceValue = priceValue => {
    this.setState({ priceValue });
  };
  handleAreaValue = areaValue => {
    this.setState({ areaValue });
  };
  getProperties = async data => {
    try {
      this.setState({ loading: true });
      let properties = await searchProperty(data);
      this.setState({ properties, loading: false });
      setHomeProperties(properties);
    } catch (err) {
      console.log("err", err);
    }
  };
  handleStateChange = stateValue => {
    this.setState({ stateValue, distValue: "" });
  };
  handleDistChange = distValue => {
    this.setState({ distValue });
  };
  handlePFor = ({ currentTarget: input }) => {
    if (input.checked) {
      this.setState({ pForValue: "Sell" });
    } else {
      this.setState({ pForValue: "Rent" });
    }
  };
  handlePType = ({ currentTarget: input }) => {
    this.setState({ pTypeValue: input.value });
  };

  handleSearchText = ({ currentTarget: input }) => {
    this.setState({ searchTextValue: input.value });
  };
  handleSearch = () => {
    const {
      stateValue,
      distValue,
      pForValue,
      pTypeValue,
      searchTextValue,
      priceValue,
      areaValue
    } = this.state;
    let searchCondation = { Publish: true };
    if (stateValue && stateValue !== "0") {
      searchCondation.State = stateValue;
    }
    if (distValue && distValue !== "0") {
      searchCondation.District = distValue;
    }
    if (pForValue) {
      searchCondation.PropertyFor = pForValue;
    }
    if (pTypeValue && pTypeValue !== "0") {
      searchCondation.Property = pTypeValue;
    }
    searchCondation.Budget = {};
    if (priceValue.min) {
      searchCondation.Budget["$gte"] = priceValue.min;
    }
    if (priceValue.max) {
      searchCondation.Budget["$lte"] = priceValue.max;
    }
    if (areaValue.min) {
      if (!searchCondation["Super Area"]) searchCondation["Super Area"] = {};
      searchCondation["Super Area"]["$gte"] = areaValue.min;
    }
    if (areaValue.max) {
      if (!searchCondation["Super Area"]) searchCondation["Super Area"] = {};

      searchCondation["Super Area"]["$lte"] = areaValue.max;
    }
    this.getProperties(searchCondation);
  };
  render() {
    return (
      <React.Fragment>
        <Banner
          propertyTypes={this.state.propertyTypes}
          priceValue={this.state.priceValue}
          areaValue={this.state.areaValue}
          handlePriceValue={this.handlePriceValue}
          handleAreaValue={this.handleAreaValue}
          handleStateChange={this.handleStateChange}
          handleDistChange={this.handleDistChange}
          handlePFor={this.handlePFor}
          handlePType={this.handlePType}
          handleSearchText={this.handleSearchText}
          handleSearch={this.handleSearch}
        />
        <PropertyArea
          properties={this.state.properties}
          loading={this.state.loading}
        />
      </React.Fragment>
    );
  }
}

export default Home;
