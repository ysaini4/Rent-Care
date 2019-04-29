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
    oType = "array"
  } = props;
  let { onChange } = props;
  let sOptions;
  if (!onChange) {
    onChange = () => {};
  }
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
        value={value}
        className="form-control"
        name={name}
        required={required}
        onChange={({ currentTarget: input }) => onChange(input)}
      >
        <option value="" />
        {sOptions}
      </select>
      {/* <div className="valid-feedback">{feedback}</div> */}
      <div className="invalid-feedback">{feedback}</div>
    </React.Fragment>
  );
};

export default Select;
