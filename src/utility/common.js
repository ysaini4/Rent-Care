import React from "react";
import Select from "../components/common/select";
import Input from "../components/common/input";
import Radio from "../components/common/radio";
import { verifyOtp, generateOtp, sendMsg } from "../services/property";

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
export const firstCharCapital = string => {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);
};
export const propertyTypes = [
  { id: 0, lable: "Select Property Type", type: 0 },
  { id: 1, lable: "Corporate Property", type: "corporate" },
  { id: 2, lable: "Commercial Property", type: "commercial" },
  { id: 3, lable: "Residential Property", type: "residential" },
  { id: 4, lable: "PG/Hostel", type: "pg" },
  { id: 5, lable: "Hotel", type: "hotel" },
  { id: 6, lable: "Restaurant", type: "restaurant" }
];
export const propertyTypesRequest = [
  { id: 0, lable: "Select Property Type", type: 0 },
  { id: 1, lable: "Corporate/Commercial Property", type: "corporate" },
  { id: 3, lable: "Residential Property", type: "residential" }
];
export const renderInput = item => {
  let input;
  if (!item.type) {
    input = (
      <Select
        id={item.id}
        name={item.name}
        label={item.label}
        required={item.required}
        value={item.value}
        options={item.options}
        feedback={item.feedback}
      />
    );
  } else if (item.type === "radio" || item.type === "checkbox") {
    input = (
      <Radio
        type={item.type}
        id={item.id}
        value={item.value}
        name={item.name}
        label={item.label}
        required={item.required}
        feedback={item.feedback}
      />
    );
  } else {
    input = (
      <Input
        id={item.id}
        name={item.name}
        type={item.type}
        label={item.label}
        value={item.value}
        required={item.required}
        feedback={item.feedback}
        placeholder={item.placeholder}
      />
    );
  }
  return input;
};
export const verifyOTP = async (mobile, otp) => {
  try {
    let res = await verifyOtp({ mobile, otp });
    if (res.type === "success") {
      return res;
    } else {
      const thObj = { msg: res.message };
      throw thObj;
    }
  } catch (err) {
    throw err;
  }
};
export const generateOTP = async mobile => {
  try {
    let res = await generateOtp({ mobile });
    if (res.type === "success") {
      return res;
    } else {
      const thObj = { msg: res.message };
      throw thObj;
    }
  } catch (err) {
    throw err;
  }
};
export const sendMSG = async (mobile, msg) => {
  try {
    let res = await sendMsg({ mobile, msg: encodeURIComponent(msg) });
    if (res.type === "success") {
      return res;
    } else {
      const thObj = { msg: res.message };
      throw thObj;
    }
  } catch (err) {
    throw err;
  }
};
export const bannerClass = pId => {
  let classB = "bannerimg";
  if (pId === 0) {
    classB = "bannerimg";
  }
  if (pId === 1) {
    classB = "bannerimg1";
  }
  if (pId === 2) {
    classB = "bannerimg2";
  }
  if (pId === 3) {
    classB = "bannerimg3";
  }
  if (pId === 4) {
    classB = "bannerimg4";
  }
  if (pId === 5) {
    classB = "bannerimg5";
  }
  if (pId === 6) {
    classB = "bannerimg6";
  }
  return classB;
};
