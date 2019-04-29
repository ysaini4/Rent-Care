import React from "react";

const Input = props => {
  const { id, type, name, label, required, feedback, placeholder } = props;
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        required={required}
        name={name}
      />
      <div className="valid-feedback" />
      <div className="invalid-feedback">{feedback}</div>
    </React.Fragment>
  );
};

export default Input;
