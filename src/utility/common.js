import _ from "lodash";
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
export const propertyTypes = () => {
  return [
    { id: 0, lable: "Select Property Type" },
    { id: 1, lable: "Corporate Property", type: "corporate" },
    { id: 2, lable: "Commercial Property", type: "commercial" },
    { id: 3, lable: "Residential Property", type: "residential" },
    { id: 4, lable: "PG", type: "pg" },
    { id: 5, lable: "Hotel", type: "hotel" },
    { id: 6, lable: "Restaurant", type: "restaurant" }
  ];
};
export const getPropertyType = pId => {
  return propertyTypes().find(item => {
    return item.id == pId;
  }).type;
};
export const addProperyFields = type => {
  let fileds = [];
  if (
    type === "corporate" ||
    type === "commercial" ||
    type === "residential" ||
    type === "pg" ||
    type === "1" ||
    type === "2" ||
    type === "3" ||
    type === "4"
  ) {
    return ["Ptype", "textFields", "otherCheckBox"];
  } else if (
    type === "hotel" ||
    type === "restaurant" ||
    type === "5" ||
    type === "6"
  ) {
    return ["textFields", "otherCheckBox"];
  }
};
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

export const Ptype = type => {
  if (type === "corporate" || type === "commercial") return cmcrPtype;
  if (type === "residential") return rPtype;
  if (type === "pg") return pgtype;
};
export const otherCheckBox = type => {
  if (type === "corporate" || type === "commercial") {
    return [
      { label: "Facility", checkBoxes: cmcrFacilities },
      { label: "Near By(Under 5 Kilometers)", checkBoxes: nearBy }
    ];
  }
  if (type === "residential") {
    return [
      { label: "Window Side View", checkBoxes: rwindowView },
      { label: "Facility", checkBoxes: rfacilities },
      { label: "Near By(Under 5 Kilometers)", checkBoxes: nearBy }
    ];
  }
  if (type === "pg") {
    return [
      { label: "Facility", checkBoxes: pgFacilities },
      { label: "Near By(Under 5 Kilometers)", checkBoxes: nearBy }
    ];
  }
  if (type === "hotel" || type === "restaurant") {
    return [
      { label: "Facility", checkBoxes: hFacilities },
      { label: "Near By(Under 5 Kilometers)", checkBoxes: nearBy }
    ];
  }
};
export const textFields = type => {
  if (type === "corporate") {
    return [
      ...crTextFileds,
      ...textFileds3,
      ...cmcrSelectFields,
      ...textFileds2,
      ...crpropstsSelect,
      ...imageFiled
    ];
  }
  if (type === "commercial") {
    return [
      ...cmrtextFileds,
      ...textFileds3,
      ...cmcrSelectFields,
      ...textFileds2,
      ...imageFiled
    ];
  }
  if (type === "residential") {
    return [
      ...cmrtextFileds,
      ...textFileds3,
      ...rselectFields,
      ...textFileds2,
      ...imageFiled
    ];
  }
  if (type === "pg") {
    return [
      ...pgTextFileds,
      ...textFileds3,
      ...pgSelectFields,
      ...pgTextFileds2,
      ...pgTextFileds3,
      ...imageFiled
    ];
  }
  if (type === "hotel") {
    return [
      ...hTextFileds,
      ...textFileds3,
      ...hSelectFields,
      ...pgTextFileds3,
      ...imageFiled
    ];
  }
  if (type === "restaurant") {
    return [
      ...hTextFileds,
      ...textFileds3,
      ...rrSelectFields,
      ...pgTextFileds3,
      ...imageFiled
    ];
  }
};
/* property type radio  */
export const rPtype = [
  { type: "radio", name: "ptype", label: "Flats", id: "flats" },
  {
    type: "radio",
    name: "ptype",
    label: "Individual House",
    id: "individualhouse"
  },
  { type: "radio", name: "ptype", label: "Pvt. Villas", id: "pvtvillas" },
  { type: "radio", name: "ptype", label: "Farm House", id: "farmhouse" }
];
const cmcrPtype = [
  { type: "radio", name: "ptype", label: "Office", id: "office" },
  { type: "radio", name: "ptype", label: "Retail Outlet", id: "retailoutlet" },
  { type: "radio", name: "ptype", label: "WareHouse", id: "wareHouse" },
  { type: "radio", name: "ptype", label: "FreeLand", id: "freeLand" }
];
export const pgtype = [
  { type: "radio", label: "Boys", id: "boys" },
  { type: "radio", label: "Girls", id: "girls" }
];
/* property type radio */

/* text fileds */
export const cmrtextFileds = [{ label: "Name", id: "name", type: "text" }];
const crTextFileds = [
  { label: "Company Name", id: "name", type: "text" },
  { label: "Refrance Name", id: "rname", type: "text" },
  { label: "Designation", id: "designation", type: "text" }
];
export const textFileds2 = [
  {
    label: "Super Area",
    id: "superarea",
    type: "text",
    placeholder: "in sq.ft"
  },
  {
    label: "Carpet Area",
    id: "carpetarea",
    type: "text",
    placeholder: "in sq.ft"
  },
  { label: "Approx Area", id: "approxarea", type: "text" },
  { label: "Budget", id: "budget", type: "text" }
];
export const textFileds3 = [
  { label: "Email", id: "email", type: "email" },
  { label: "Mobile", id: "mobile", type: "number" },
  { custom: "stateDist" },
  { label: "City", id: "city", type: "text" },
  { label: "Location", id: "location", type: "text" }
];

export const imageFiled = [{ label: "Image", id: "image", type: "file" }];
export const pgTextFileds = [
  { label: "PG Name", id: "pgname", type: "text" },
  { label: "Refrance Person", id: "rperson", type: "text" }
];
export const rrtextFileds = [
  { label: "Restaurant Name", id: "restaurantname", type: "text" }
];
export const hTextFileds = [
  { label: "Hotel Name", id: "hotelname", type: "text" },
  { label: "Refrance Person", id: "rperson", type: "text" },
  { label: "Designation", id: "designation", type: "text" }
];
export const pgTextFileds2 = [
  { label: "Room Size", id: "roomsize", type: "text" }
];

export const pgTextFileds3 = [{ label: "Budget", id: "budget", type: "text" }];
/* text fileds */
/* check box */
export const rwindowView = [
  { type: "checkbox", name: "skyview", label: "Sky View", id: "skyview" },
  { type: "checkbox", name: "poolview", label: "Pool View", id: "poolview" },
  {
    type: "checkbox",
    name: "gardenview",
    label: "Garden View",
    id: "gardenview"
  },
  {
    type: "checkbox",
    name: "parkingview",
    label: "Parking View",
    id: "parkingview"
  },
  {
    type: "checkbox",
    name: "clubhouseview",
    label: "Club House View",
    id: "clubhouseview"
  },
  {
    type: "checkbox",
    name: "maingateview",
    label: "Main intrance Gate View",
    id: "maingateview"
  },
  {
    type: "checkbox",
    name: "outerbuildingview",
    label: "Outer Building View",
    id: "outerbuildingview"
  }
];
export const rfacilities = [
  {
    type: "checkbox",
    label: "Swiming Pool",
    id: "swimingpool",
    name: "swimingpool"
  },
  { type: "checkbox", label: "Club House", id: "clubhouse", name: "clubhouse" },
  {
    type: "checkbox",
    label: "Indoor Sports",
    id: "indoorsports",
    name: "indoorsports"
  },
  {
    type: "checkbox",
    label: "Outdoor Sports",
    id: "outdoorsports",
    name: "outdoorsports"
  },
  { type: "checkbox", label: "Garden", id: "garden", name: "garden" },
  {
    type: "checkbox",
    label: "Car Parking",
    id: "carparking",
    name: "carparking"
  },
  { type: "checkbox", label: "Temple", id: "temple", name: "temple" },
  { type: "checkbox", label: "School", id: "school", name: "school" },
  { type: "checkbox", label: "Hospital", id: "hospital", name: "hospital" }
];
export const cmcrFacilities = [
  {
    label: "Car Parking",
    id: "carparking",
    type: "checkbox",
    name: "carparking"
  },
  { label: "Water 24hr", id: "water24hr", type: "checkbox", name: "water24hr" }
];
export const pgFacilities = [
  { type: "checkbox", label: "Gim", id: "gim", name: "gim" },
  { type: "checkbox", label: "Pool", id: "pool", name: "pool" },
  { type: "checkbox", label: "Sports", id: "sports", name: "sports" },
  { type: "checkbox", label: "Parking", id: "parking", name: "parking" },
  {
    type: "checkbox",
    label: "Study Table",
    id: "studytable",
    name: "studytable"
  },
  { type: "checkbox", label: "Alram", id: "alram", name: "alram" },
  { type: "checkbox", label: "Locker", id: "locker", name: "locker" },
  { type: "checkbox", label: "Kitchen", id: "kitchen", name: "kitchen" }
];
export const hFacilities = [
  { type: "checkbox", label: "Gim", id: "gim", name: "gim" },
  { type: "checkbox", label: "Pool", id: "pool", name: "pool" },
  { type: "checkbox", label: "Bar", id: "bar", name: "bar" },
  {
    type: "checkbox",
    label: "Banquet Hall",
    id: "banquethall",
    name: "banquethall"
  },
  { type: "checkbox", label: "Kitchen", id: "kitchen", name: "kitchen" },
  { type: "checkbox", label: "Parking", id: "parking", name: "parking" }
];

export const nearBy = [
  {
    label: "Police Station",
    id: "policestation",
    type: "checkbox"
  },
  {
    label: "Railway Station",
    id: "railwaystation",
    type: "checkbox"
  },
  {
    label: "Metro Station",
    id: "metrostation",
    type: "checkbox"
  },
  { type: "checkbox", label: "Hospital", id: "hospital" }
];
/* check box */
/* select option */
const facing = [
  "South",
  "North",
  "East",
  "West",
  "South-East",
  "South-West",
  "North-East",
  "North-West"
];
const apprmentType = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"];
const ftype = ["Furnished", "Unfurnished"];
export const rselectFields = [
  { label: "Having", id: "having", options: apprmentType },
  { label: "Floor", id: "floor", options: ["Ground", ..._.range(1, 26)] },
  { label: "Badrooms", id: "badrooms", options: _.range(1, 6) },
  { label: "Bathrooms", id: "bathrooms", options: _.range(1, 6) },
  { label: "Balcony", id: "balcony", options: _.range(1, 6) },
  { label: "Furnish Type", id: "ftype", options: ftype },
  { label: "Facing", id: "facing", options: facing }
];
export const crpropstsSelect = [
  {
    label: "Property Status",
    id: "propertystatus",
    options: ["Approved", "Non Approved"]
  }
];
export const cmcrSelectFields = [
  { label: "Floor", id: "floor", options: ["Ground", ..._.range(1, 26)] },
  { label: "Facing", id: "facing", options: facing }
];
export const pgSelectFields = [
  { label: "No.of Rooms", id: "noorooms", options: _.range(1, 6) }
];
export const hSelectFields = [
  { label: "No.of Rooms", id: "noorooms", options: _.range(1, 6) },
  { label: "Hotel Type", id: "hoteltype", options: ["Single", "DBL", "Sweet"] }
];
export const rrSelectFields = [
  { label: "No.of Rooms", id: "noorooms", options: _.range(1, 6) },
  {
    label: "Restaurant Type",
    id: "restauranttype",
    options: ["Safe", "DBL", "Sweet"]
  },

  { label: "Seatry", id: "seatry", options: [20, 50, 100, 150] }
];
/* select option */
