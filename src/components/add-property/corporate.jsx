import React from "react";
import Input from "../common/input";
import Radio from "../common/radio";

const Corporate = props => {
  return (
    <form className="needs-validation" noValidate>
      <div className="form-row">
        <div className="mb-3 custom-radio custom-control mr-3">
          <Radio
            type="radio"
            id="rad1"
            name="ptype"
            label="Office"
            feedback=""
            required={true}
          />
        </div>
        <div className="mb-3 custom-radio custom-control mr-3">
          <Radio
            type="radio"
            id="rad4"
            name="ptype"
            label="Shop"
            feedback=""
            required={true}
          />
        </div>
        <div className="mb-3 custom-control custom-radio mr-3">
          <Radio
            type="radio"
            id="rad2"
            name="ptype"
            label="WareHouse"
            feedback=""
            required={true}
          />
        </div>
        <div className="mb-3 custom-control custom-radio mr-3">
          <Radio
            type="radio"
            id="rad3"
            name="ptype"
            label="FreeLand"
            feedback=""
            required={true}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <Input
            id="name"
            type="text"
            label="Company Name"
            required={true}
            valid={true}
          />
        </div>
        <div className="col-md-4 mb-3">
          <Input
            id="rdegination"
            type="text"
            label="Refernce Person  Degination"
            required={true}
            valid={true}
          />
        </div>
        <div className="col-md-4 mb-3">
          <Input
            id="email"
            type="email"
            label="Email"
            required={true}
            valid={true}
          />
        </div>
        <div className="col-md-4 mb-3">
          <Input
            id="mobile"
            type="number"
            label="Mobile"
            required={true}
            valid={true}
          />
        </div>

        <div className="col-md-4 mb-3">
          <Input
            id="location"
            type="text"
            label="Location"
            required={true}
            valid={true}
          />
        </div>
        <div className="col-md-4 mb-3">
          <Input
            id="city"
            type="text"
            label="City"
            required={true}
            valid={true}
          />
        </div>
        <div className="col-md-4 mb-3">
          <Input
            id="district"
            type="text"
            label="District"
            required={true}
            valid={true}
          />
        </div>

        <div className="col-md-4 mb-3">
          <Input
            id="state"
            type="text"
            label="State"
            required={true}
            valid={true}
          />
        </div>
        <div className="col-md-4 mb-3">
          <Input
            id="approxArea"
            type="text"
            label="Approx Area"
            required={true}
            valid={true}
          />
        </div>
        <div className="col-md-4 mb-3">
          <Input
            id="budget"
            type="text"
            label="Budget"
            required={true}
            valid={true}
          />
        </div>
        <div className="col-md-4 mb-3">
          <Input
            id="facing"
            type="text"
            label="Facing"
            required={true}
            valid={true}
          />
        </div>
        <div className="col-md-4 mb-3">
          <Input
            id="floor"
            type="text"
            label="Floor"
            required={true}
            valid={true}
          />
        </div>
      </div>

      <button className="btn btn-primary" type="submit">
        Submit form
      </button>
    </form>
  );
};

export default Corporate;
