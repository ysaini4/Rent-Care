import React from "react";
const Radio = props => {
  const { id, type, required, name, value, label, feedback } = props;
  return (
    <React.Fragment>
      <input
        type={type}
        className="custom-control-input"
        id={id}
        value={value}
        name={name}
        required={required}
      />
      <label className="custom-control-label" htmlFor={id}>
        {label}
      </label>
      <div className="invalid-feedback">{feedback}</div>
    </React.Fragment>
  );
};

export default Radio;
