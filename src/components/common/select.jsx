import React from "react";
const Select = props => {
  const {
    id,
    options,
    name,
    label,
    required,
    valid,
    feedback,
    oType = "array",
    onChange
  } = props;
  let sOptions;
  if (oType === "array") {
    sOptions = options.map(pItem => (
      <option key={pItem} value={pItem}>
        {pItem}
      </option>
    ));
  } else if (oType === "optionlist") {
    sOptions = options;
  }
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className="form-control"
        name={name}
        required={required}
        onChange={({ currentTarget: input }) => onChange(input)}
      >
        <option value="" />
        {sOptions}
      </select>
      {valid ? (
        <div className="valid-feedback">{feedback}</div>
      ) : (
        <div className="invalid-feedback">{feedback}</div>
      )}
    </React.Fragment>
  );
};

export default Select;
