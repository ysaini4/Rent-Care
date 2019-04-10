import React from "react";

const Input = props => {
  const { id, type, label, required, valid, feedback } = props;
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={label}
        required={required}
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
