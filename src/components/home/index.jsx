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
    priceValue: { min: 0, max: 2000 },
    areaValue: { min: 0, max: 5000 },
    stateValue: "",
    distValue: "",
    pForValue: "Rent",
    pTypeValue: "",
    aTypeValue: "",
    searchTextValue: "",
    loading: false,
    hbClass: "hb1 hb2 hb3 hb4 hb5"
  };
  componentDidMount() {
    loadInit();
    this.getProperties({ Publish: true, ShowAtHome: true });
    this.changeHB();
  }
  changeHB = () => {
    let hbClasses = ["hb1", "hb2", "hb3", "hb4", "hb5"];
    let counter = 1;
    setInterval(() => {
      this.setState({ hbClass: hbClasses[counter] });
      counter++;
      if (counter >= 5) {
        counter = 1;
      }
    }, 5000);
  };
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
  handleAType = ({ currentTarget: input }) => {
    console.log(input.value);
    this.setState({ aTypeValue: input.value });
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
      priceValue,
      areaValue,
      aTypeValue
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
      if (pTypeValue === "residential" && aTypeValue !== "Apprment Type") {
        searchCondation.Having = aTypeValue;
      }
    }
    if (priceValue.min) {
      if (pTypeValue === "pg") {
        if (!searchCondation.$or) searchCondation.$or = [];
      } else {
        searchCondation.Budget = {};
        searchCondation.Budget["$gte"] = priceValue.min;
      }
    }
    if (priceValue.max) {
      if (pTypeValue === "pg") {
        if (!searchCondation.$or) searchCondation.$or = [];
        searchCondation.$or.push(
          {
            $and: [
              { "Budget Only Rooms": { $gte: priceValue.min } },
              { "Budget Only Rooms": { $lte: priceValue.max } }
            ]
          },
          {
            $and: [
              { "Budget With All Meals": { $gte: priceValue.min } },
              { "Budget With All Meals": { $lte: priceValue.max } }
            ]
          }
        );
      } else {
        searchCondation.Budget["$lte"] = priceValue.max;
      }
    }
    if (
      areaValue.min &&
      pTypeValue !== "pg" &&
      pTypeValue !== "hotel" &&
      pTypeValue !== "restaurant"
    ) {
      if (!searchCondation["Super Area"]) searchCondation["Super Area"] = {};
      searchCondation["Super Area"]["$gte"] = areaValue.min;
    }
    if (
      areaValue.max &&
      pTypeValue !== "pg" &&
      pTypeValue !== "hotel" &&
      pTypeValue !== "restaurant"
    ) {
      if (!searchCondation["Super Area"]) searchCondation["Super Area"] = {};

      searchCondation["Super Area"]["$lte"] = areaValue.max;
    }

    console.log(searchCondation, "searchCondation");
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
          handleAType={this.handleAType}
          handleSearchText={this.handleSearchText}
          handleSearch={this.handleSearch}
          pTypeValue={this.state.pTypeValue}
          hbClass={this.state.hbClass}
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
