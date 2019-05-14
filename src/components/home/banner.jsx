import React from "react";
import StateDist from "../common/stateDist";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
const Banner = ({
  propertyTypes,
  priceValue,
  areaValue,
  handlePriceValue,
  handleAreaValue,
  handleSearchText,
  handleStateChange,
  handleDistChange,
  handlePFor,
  handlePType,
  handleSearch,
  pTypeValue,
  handleAType
}) => {
  const apprmentType = [
    "Apprment Type",
    "1 BHK",
    "2 BHK",
    "3 BHK",
    "4 BHK",
    "5 BHK"
  ];

  return (
    <section className="home-banner-area relative" id="home">
      <div className="overlay overlay-bg" />
      <div className="container">
        <div className="row fullscreen align-items-end justify-content-center">
          <div className="banner-content col-lg-12 col-md-12">
            {/* <h1>We Care Where You Live</h1> */}
            <div className="search-field">
              <form className="search-form" action="#">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-xs-6">
                    <div className="row">
                      <StateDist
                        removeLabel={true}
                        divClass="col-md-6"
                        handleStateChange={handleStateChange}
                        handleDistChange={handleDistChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-xs-6">
                    <select
                      name="property-type"
                      className="app-select form-control"
                      required
                      onChange={handlePType}
                    >
                      {propertyTypes.map(item => {
                        return (
                          <option
                            data-display={item.lable}
                            value={item.type}
                            key={item.id}
                          >
                            {item.lable}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  {pTypeValue === "residential" ? (
                    <div className="col-lg-2 col-md-6 col-xs-6">
                      <select
                        name="room-type"
                        className="app-select form-control"
                        required
                        onChange={handleAType}
                      >
                        {apprmentType.map(item => {
                          return (
                            <option data-display={item} value={item} key={item}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  ) : null}

                  <div className="col-lg-3 col-md-6 col-xs-6">
                    <input
                      type="text"
                      className="app-select form-control"
                      name="searchText"
                      placeholder="Location"
                      onChange={handleSearchText}
                    />
                  </div>

                  <div className="col-lg-6 range-wrap">
                    <p>Price Range(₹):</p>

                    <InputRange
                      step={1}
                      minValue={1}
                      maxValue={10000}
                      formatLabel={value => `₹ ${value}`}
                      value={priceValue}
                      onChange={value => {
                        handlePriceValue(value);
                      }}
                      onChangeComplete={value => {}}
                    />
                  </div>
                  <div className="col-lg-6 range-wrap">
                    <p>Area Range(sq.ft.):</p>
                    <InputRange
                      step={1}
                      minValue={1}
                      maxValue={445345}
                      formatLabel={value => `${value} sq.ft.`}
                      value={areaValue}
                      onChange={value => {
                        handleAreaValue(value);
                      }}
                      onChangeComplete={value => {}}
                    />
                  </div>

                  <div
                    className="col-lg-12 d-flex justify-content-end"
                    style={{ marginLeft: "auto" }}
                  >
                    <div className="row" style={{ marginRight: 0 }}>
                      <div
                        className="col-xs-6 d-flex justify-content-end toggle-wrap input-serach-ptype"
                        style={{ marginLeft: "auto" }}
                      >
                        <div className="onoffswitch3 d-block mx-auto">
                          <input
                            type="checkbox"
                            name="onoffswitch3"
                            className="onoffswitch3-checkbox"
                            id="myonoffswitch3"
                            onChange={handlePFor}
                          />
                          <label
                            className="onoffswitch3-label"
                            htmlFor="myonoffswitch3"
                          >
                            <span className="onoffswitch3-inner">
                              <span className="onoffswitch3-active">
                                <span className="onoffswitch3-switch">
                                  Sell
                                </span>
                                <span className="lnr lnr-arrow-right" />
                              </span>
                              <span className="onoffswitch3-inactive">
                                <span className="lnr lnr-arrow-left" />
                                <span className="onoffswitch3-switch">
                                  Rent
                                </span>
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <button
                          type="button"
                          className="primary-btn"
                          style={{ marginLeft: 5 }}
                          onClick={handleSearch}
                        >
                          Search
                          <span className="lnr lnr-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
