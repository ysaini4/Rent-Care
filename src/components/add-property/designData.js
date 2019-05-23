import _ from "lodash";

export const pFormRows = {
  typeRow1: "Ptype",
  typeRow2: "pFor",
  textFieldsRow1: "textFields",
  checkBoxRow1: "otherCheckBox"
};

export const Ptype = type => {
  if (type === "corporate" || type === "commercial") return cmcrPtype;
  if (type === "residential") return rPtype;
  if (type === "pg") return pgtype;
};
export const pFor = type => {
  return pForAll;
};
export const otherCheckBox = type => {
  if (type === "corporate" || type === "commercial") {
    return [
      { id: "Facility", label: "Facility", checkBoxes: cmcrFacilities },
      {
        id: "Near By",
        label: "Near By(Under 5 Kilometers)",
        checkBoxes: nearBy
      }
    ];
  }
  if (type === "residential") {
    return [
      {
        id: "Window Side View",
        label: "Window Side View",
        checkBoxes: rwindowView
      },
      { id: "Facility", label: "Facility", checkBoxes: rfacilities },
      {
        id: "Near By",
        label: "Near By(Under 5 Kilometers)",
        checkBoxes: nearBy
      }
    ];
  }
  if (type === "pg") {
    return [
      { id: "Facility", label: "Facility", checkBoxes: pgFacilities },
      {
        id: "Near By",
        label: "Near By(Under 5 Kilometers)",
        checkBoxes: nearBy
      }
    ];
  }
  if (type === "hotel" || type === "restaurant") {
    return [
      { id: "Facility", label: "Facility", checkBoxes: hFacilities },
      {
        id: "Near By",
        label: "Near By(Under 5 Kilometers)",
        checkBoxes: nearBy
      }
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
      ...pgSelectFields1,
      ...pgTextFileds2,
      ...pgTextFileds3,
      ...imageFiled
    ];
  }
  if (type === "hotel") {
    return [
      ...hTextFileds,
      ...hrrtextfileds,
      ...textFileds3,
      ...hSelectFields,
      ...hrrTextFileds3,
      ...imageFiled
    ];
  }
  if (type === "restaurant") {
    return [
      ...rrtextFileds,
      ...hrrtextfileds,
      ...textFileds3,
      ...rrSelectFields,
      ...hrrTextFileds3,
      ...imageFiled
    ];
  }
};
/* property for radio  */
const pForAll = [
  {
    value: "Rent",
    type: "radio",
    name: "PropertyFor",
    label: "Rent",
    id: "rent"
  },
  {
    value: "Sell",
    type: "radio",
    name: "PropertyFor",
    label: "Sell",
    id: "sell"
  }
];
/* property type radio  */
const rPtype = [
  {
    value: "Flats",
    type: "radio",
    name: "Ptype",
    label: "Flats",
    id: "flats"
  },
  {
    value: "Individual House",
    type: "radio",
    name: "Ptype",
    label: "Individual House",
    id: "individualhouse"
  },
  {
    value: "Pvt. Villas",
    type: "radio",
    name: "Ptype",
    label: "Pvt. Villas",
    id: "pvtvillas"
  },
  {
    value: "Plot",
    type: "radio",
    name: "Ptype",
    label: "Plot",
    id: "plot"
  },
  {
    value: "Farm House",
    type: "radio",
    name: "Ptype",
    label: "Farm House",
    id: "farmhouse",
    feedback: "Property Type Required"
  }
];
const cmcrPtype = [
  {
    value: "Office",
    type: "radio",
    name: "Ptype",
    label: "Office",
    id: "office",
    required: true
  },
  {
    value: "Retail Outlet",
    type: "radio",
    name: "Ptype",
    label: "Retail Outlet",
    id: "retailoutlet"
  },
  {
    value: "WareHouse",
    type: "radio",
    name: "Ptype",
    label: "WareHouse",
    id: "wareHouse"
  },
  {
    value: "FreeLand",
    type: "radio",
    name: "Ptype",
    label: "FreeLand",
    id: "freeLand",
    feedback: "Property Type Required"
  }
];
const pgtype = [
  {
    required: true,
    value: "Boys",
    type: "radio",
    name: "Ptype",
    label: "Boys",
    id: "boys"
  },
  {
    value: "Both",
    type: "radio",
    name: "Ptype",
    label: "Both",
    id: "both"
  },
  {
    name: "Ptype",
    value: "Girls",
    type: "radio",
    label: "Girls",
    id: "girls",
    feedback: "Pg Type Required"
  }
];
/* property type radio */

/* text fileds */
const cmrtextFileds = [
  {
    feedback: "Required.",
    required: true,
    label: "Name",
    id: "name",
    type: "text",
    name: "Name"
  }
];
const crTextFileds = [
  {
    feedback: "Required.",
    required: true,
    label: "Name",
    id: "name",
    type: "text",
    name: "Name"
  }
];
const textFileds2 = [
  {
    feedback: "Required.",
    required: true,
    label: "Super Area",
    id: "superarea",
    type: "text",
    name: "Super Area",
    placeholder: "in sq.ft"
  },
  {
    feedback: "Required.",
    required: true,
    label: "Carpet Area",
    id: "carpetarea",
    type: "text",
    name: "Carpet Area",
    placeholder: "in sq.ft"
  },
  {
    feedback: "Required.",
    required: true,
    label: "Approx Area",
    id: "approxarea",
    type: "text",
    name: "Approx Area"
  },
  {
    feedback: "Required.",
    required: true,
    label: "Budget",
    id: "budget",
    type: "text",
    name: "Budget"
  }
];
const textFileds3 = [
  {
    feedback: "Required.",
    required: true,
    label: "Email",
    id: "email",
    type: "email",
    name: "Email"
  },
  {
    feedback: "Required.",
    required: true,
    label: "Mobile",
    id: "mobile",
    type: "number",
    name: "Mobile"
  },
  { feedback: "Required.", required: true, custom: "stateDist" },
  {
    feedback: "Required.",
    required: true,
    label: "City",
    id: "city",
    type: "text",
    name: "City"
  },
  {
    feedback: "Required.",
    required: true,
    label: "Location",
    id: "location",
    type: "text",
    name: "Location"
  },
  {
    feedback: "Required.",
    required: true,
    label: "Address",
    id: "address",
    type: "text",
    name: "Address"
  }
];

const imageFiled = [
  {
    feedback: "Required.",
    required: true,
    label: "Image",
    id: "image",
    type: "file",
    name: "Image"
  }
];
const pgTextFileds = [
  {
    feedback: "Required.",
    required: true,
    label: "PG Name",
    id: "pgname",
    type: "text",
    name: "PG Name"
  },
  {
    feedback: "Required.",
    required: true,
    label: "Reference Person",
    id: "rperson",
    type: "text",
    name: "Refrance Person"
  }
];
const rrtextFileds = [
  {
    feedback: "Required.",
    required: true,
    label: "Restaurant Name",
    id: "restaurantname",
    type: "text",
    name: "Restaurant Name"
  }
];
const hTextFileds = [
  {
    feedback: "Required.",
    required: true,
    label: "Hotel Name",
    id: "hotelname",
    type: "text",
    name: "Hotel Name"
  }
];
const hrrtextfileds = [
  {
    feedback: "Required.",
    required: true,
    label: "Reference Person",
    id: "rperson",
    type: "text",
    name: "Refrance Person"
  },
  {
    feedback: "Required.",
    required: true,
    label: "Designation",
    id: "designation",
    type: "text",
    name: "Designation"
  }
];
const pgTextFileds2 = [
  {
    feedback: "Required.",
    required: true,
    label: "Room Size",
    id: "roomsize",
    type: "text",
    name: "Room Size"
  }
];

const hrrTextFileds3 = [
  {
    feedback: "Required.",
    required: true,
    label: "Budget",
    id: "budget",
    type: "text",
    name: "Budget"
  }
];
const pgTextFileds3 = [
  {
    feedback: "Required.",
    required: true,
    label: "Budget Only Rooms",
    id: "budgetrooms",
    type: "text",
    name: "Budget Only Rooms"
  },
  {
    feedback: "Required.",
    required: true,
    label: "Budget With All Meals",
    id: "budgetmeal",
    type: "text",
    name: "Budget With All Meals"
  }
];
/* text fileds */
/* check box */
const rwindowView = [
  {
    type: "checkbox",
    name: "Sky View",
    label: "Sky View",
    value: true,
    id: "skyview"
  },
  {
    type: "checkbox",
    name: "Pool View",
    label: "Pool View",
    value: true,
    id: "poolview"
  },
  {
    type: "checkbox",
    name: "Garden View",
    label: "Garden View",
    value: true,
    id: "gardenview"
  },
  {
    type: "checkbox",
    name: "Parking View",
    label: "Parking View",
    value: true,
    id: "parkingview"
  },
  {
    type: "checkbox",
    name: "Club House View",
    label: "Club House View",
    value: true,
    id: "clubhouseview"
  },
  {
    type: "checkbox",
    name: "Main intrance Gate View",
    label: "Main intrance Gate View",
    value: true,
    id: "maingateview"
  },
  {
    type: "checkbox",
    name: "Outer Building View",
    label: "Outer Building View",
    value: true,
    id: "outerbuildingview"
  }
];
const rfacilities = [
  {
    type: "checkbox",
    label: "Swiming Pool",
    value: true,
    id: "swimingpool",
    name: "Swiming Pool"
  },
  {
    type: "checkbox",
    label: "Club House",
    value: true,
    id: "clubhouse",
    name: "Club House"
  },
  {
    type: "checkbox",
    label: "Indoor Sports",
    value: true,
    id: "indoorsports",
    name: "Indoor Sports"
  },
  {
    type: "checkbox",
    label: "Outdoor Sports",
    value: true,
    id: "outdoorsports",
    name: "Outdoor Sports"
  },
  {
    type: "checkbox",
    label: "Garden",
    value: true,
    id: "garden",
    name: "Garden"
  },
  {
    type: "checkbox",
    label: "Car Parking",
    value: true,
    id: "carparking",
    name: "Car Parking"
  },
  {
    type: "checkbox",
    value: true,
    label: "Temple",
    id: "temple",
    name: "Temple"
  },
  {
    type: "checkbox",
    value: true,
    label: "School",
    id: "school",
    name: "School"
  }
];
const cmcrFacilities = [
  {
    value: true,
    label: "Car Parking",
    id: "carparking",
    type: "checkbox",
    name: "Car Parking"
  },
  {
    value: true,
    label: "Water 24hr",
    id: "water24hr",
    type: "checkbox",
    name: "Water 24hr"
  }
];
const pgFacilities = [
  { type: "checkbox", label: "Gim", value: true, id: "gim", name: "Gim" },
  { type: "checkbox", label: "Pool", value: true, id: "pool", name: "Pool" },
  {
    type: "checkbox",
    label: "Sports",
    value: true,
    id: "sports",
    name: "Sports"
  },
  {
    type: "checkbox",
    label: "Parking",
    value: true,
    id: "parking",
    name: "Parking"
  },
  {
    type: "checkbox",
    label: "Study Table",
    value: true,
    id: "studytable",
    name: "Study Table"
  },
  {
    type: "checkbox",
    label: "Alram",
    value: true,
    id: "alram",
    name: "Alram"
  },
  {
    type: "checkbox",
    label: "Locker",
    value: true,
    id: "locker",
    name: "Locker"
  },
  {
    type: "checkbox",
    label: "Kitchen",
    value: true,
    id: "kitchen",
    name: "Kitchen"
  }
];
const hFacilities = [
  { type: "checkbox", label: "Gim", value: true, id: "gim", name: "Gim" },
  { type: "checkbox", label: "Pool", value: true, id: "pool", name: "Pool" },
  { type: "checkbox", label: "Bar", value: true, id: "bar", name: "Bar" },
  {
    type: "checkbox",
    label: "Banquet Hall",
    value: true,
    id: "banquethall",
    name: "Banquet Hall"
  },
  {
    type: "checkbox",
    label: "Kitchen",
    value: true,
    id: "kitchen",
    name: "Kitchen"
  },
  {
    type: "checkbox",
    label: "Parking",
    value: true,
    id: "parking",
    name: "Parking"
  }
];

const nearBy = [
  {
    label: "Police Station",
    value: true,
    id: "policestation",
    name: "Police Station",
    type: "checkbox"
  },
  {
    label: "Railway Station",
    value: true,
    id: "railwaystation",
    name: "Railway Station",
    type: "checkbox"
  },
  {
    label: "Metro Station",
    value: true,
    id: "metrostation",
    name: "Metro Station",
    type: "checkbox"
  },
  {
    type: "checkbox",
    label: "Hospital",
    value: true,
    id: "hospital",
    name: "Hospital"
  }
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
const ftype = ["Furnished", "Semi furnished", "Unfurnished"];
const rselectFields = [
  {
    feedback: "Required.",
    required: true,
    label: "BHK",
    id: "having",
    name: "Having",
    options: apprmentType
  },
  {
    feedback: "Required.",
    required: true,
    label: "Floors",
    id: "floor",
    name: "Floors",
    options: ["Ground", ..._.range(1, 26)]
  },
  {
    feedback: "Required.",
    required: true,
    label: "Badrooms",
    id: "badrooms",
    name: "Badrooms",
    options: _.range(1, 6)
  },
  {
    feedback: "Required.",
    required: true,
    label: "Bathrooms",
    id: "bathrooms",
    name: "Bathrooms",
    options: _.range(1, 6)
  },
  {
    feedback: "Required.",
    required: true,
    label: "Balcony",
    id: "balcony",
    name: "Balcony",
    options: _.range(1, 6)
  },
  {
    feedback: "Required.",
    required: true,
    label: "Furnish Type",
    id: "ftype",
    name: "Furnish Type",
    options: ftype
  },
  {
    feedback: "Required.",
    required: true,
    label: "Facing",
    id: "facing",
    name: "Facing",
    options: facing
  }
];
const crpropstsSelect = [
  {
    feedback: "Required.",
    required: true,
    label: "Property Status",
    id: "propertystatus",
    name: "Property Status",
    options: ["Approved", "Non Approved"]
  }
];
const cmcrSelectFields = [
  {
    feedback: "Required.",
    required: true,
    label: "Floor",
    id: "floor",
    name: "Floor",
    options: ["Ground", ..._.range(1, 26)]
  },
  {
    feedback: "Required.",
    required: true,
    label: "Facing",
    id: "facing",
    name: "Facing",
    options: facing
  }
];
const pgSelectFields = [
  {
    feedback: "Required.",
    required: true,
    label: "No.of Rooms",
    id: "noorooms",
    name: "No.of Rooms",
    options: _.range(1, 25)
  }
];
const pgSelectFields1 = [
  {
    feedback: "Required.",
    required: true,
    label: "Single Sharing Rooms",
    id: "ssrooms",
    name: "Single Sharing Rooms",
    options: _.range(1, 25)
  },
  {
    feedback: "Required.",
    required: true,
    label: "Double Sharing Rooms",
    id: "dsrooms",
    name: "Double Sharing Rooms",
    options: _.range(1, 25)
  },
  {
    feedback: "Required.",
    required: true,
    label: "Triple Sharing Rooms",
    id: "tsrooms",
    name: "Triple Sharing Rooms",
    options: _.range(1, 25)
  },
  {
    feedback: "Required.",
    required: true,
    label: "Four Sharing Rooms",
    id: "fsrooms",
    name: "Four Sharing Rooms",
    options: _.range(1, 25)
  }
];
const hSelectFields = [
  {
    feedback: "Required.",
    required: true,
    label: "No.of Rooms",
    id: "noorooms",
    name: "No.of Rooms",
    options: _.range(1, 6)
  },
  {
    feedback: "Required.",
    required: true,
    label: "Hotel Type",
    id: "hoteltype",
    name: "Hotel Type",
    options: ["Budget", "3-Star", "4-Star", "5-Star", "7-Star"]
  }
];
const rrSelectFields = [
  {
    feedback: "Required.",
    required: true,
    label: "Restaurant Type",
    id: "restauranttype",
    name: "Restaurant Type",
    options: ["Budget", "3-Star", "4-Star", "5-Star", "7-Star"]
  },
  {
    feedback: "Required.",
    required: true,
    label: "Seating",
    id: "seatry",
    name: "Seatry",
    options: [20, 50, 100, 150]
  }
];
/* select option */
