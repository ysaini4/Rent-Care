import React from "react";

const Input = props => {
  const {
    id,
    type,
    name,
    label,
    required,
    valid,
    feedback,
    placeholder
  } = props;
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
      {valid ? (
        <div className="valid-feedback">{feedback}</div>
      ) : (
        <div className="invalid-feedback">{feedback}</div>
      )}
    </React.Fragment>
  );
};

export default Input;
