import React from "react";
const Select = props => {
  const {
    id,
    value,
    options,
    name,
    label,
    required,
    feedback,
    oType = "array",
    removeLabel = false
  } = props;
  let { onChange } = props;
  let sOptions;
  if (!onChange) {
    onChange = () => {};
  }
  if (oType === "array") {
    sOptions = options.map(pItem => (
      <option key={pItem} value={pItem} data-display="Choose locations">
        {pItem}
      </option>
    ));
  } else if (oType === "optionlist") {
    sOptions = options;
  }
  return (
    <React.Fragment>
      {!removeLabel ? <label htmlFor={id}>{label}</label> : null}

      <select
        id={id}
        value={value}
        className="app-select form-control"
        name={name}
        required={required}
        onChange={({ currentTarget: input }) => onChange(input)}
      >
        {!removeLabel ? <option value="" /> : null}
        {sOptions}
      </select>
      {/* <div className="valid-feedback">{feedback}</div> */}
      <div className="invalid-feedback">{feedback}</div>
    </React.Fragment>
  );
};

export default Select;
