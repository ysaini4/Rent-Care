import React from "react";
import Select from "../components/common/select";
import Input from "../components/common/input";
import Radio from "../components/common/radio";

export function sortState(a, b) {
  if (a.state.name < b.state.name) return -1;
  if (a.state.name > b.state.name) return 1;
  return 0;
}
export function sortDist(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

export const renderInput = item => {
  let input;
  if (!item.type) {
    input = (
      <Select
        id={item.id}
        label={item.label}
        required={true}
        valid={true}
        options={item.options}
      />
    );
  } else if (item.type === "radio" || item.type === "checkbox") {
    input = (
      <Radio
        type={item.type}
        id={item.id}
        name={item.name}
        label={item.label}
        feedback=""
        required={true}
      />
    );
  } else {
    input = (
      <Input
        id={item.id}
        type={item.type}
        label={item.label}
        required={true}
        valid={true}
        placeholder={item.placeholder}
      />
    );
  }
  return input;
};
