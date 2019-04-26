import _ from "lodash";

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
/* property type radio  */
export const rPtype = [
  { label: "Flats", id: "flats" },
  { label: "Individual House", id: "individualhouse" },
  { label: "Pvt. Villas", id: "pvtvillas" },
  { label: "Farm House", id: "farmhouse" }
];
const cmcrPtype = [
  { label: "Office", id: "office" },
  { label: "Retail Outlet", id: "retailoutlet" },
  { label: "WareHouse", id: "wareHouse" },
  { label: "FreeLand", id: "freeLand" }
];
export const Ptype = type => {
  if (type === "corporate" || type === "commercial") return cmcrPtype;
  if (type === "residential") return rPtype;
};
export const pgtype = [
  { label: "Boys", id: "boys" },
  { label: "Girls", id: "girls" }
];
/* property type radio */

/* text fileds */
export const cmrtextFileds = [
  { label: "Name", id: "name", type: "text" },
  { label: "Email", id: "email", type: "email" },
  { label: "Mobile", id: "mobile", type: "number" }
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
  { label: "City", id: "city", type: "text" },
  { label: "Location", id: "location", type: "text" }
];
const crTextFileds = [
  { label: "Company Name", id: "name", type: "text" },
  { label: "Refrance Name", id: "rname", type: "text" },
  { label: "Designation", id: "designation", type: "text" },
  { label: "Email", id: "email", type: "email" },
  { label: "Mobile", id: "mobile", type: "number" },
  { custom: "stateDist" }
];
export const textFields = type => {
  if (type === "corporate") {
    return [...crTextFileds];
  }
};
export const imageFiled = [{ label: "Image", id: "image", type: "file" }];
export const pgTextFileds = [
  { label: "PG Name", id: "pgname", type: "text" },
  { label: "Refrance Person", id: "rperson", type: "text" },
  { label: "Email", id: "email", type: "email" },
  { label: "Mobile", id: "mobile", type: "number" }
];
export const rrtextFileds = [
  { label: "Restaurant Name", id: "restaurantname", type: "text" }
];
export const hTextFileds = [
  { label: "Hotel Name", id: "hotelname", type: "text" },
  { label: "Refrance Person", id: "rperson", type: "text" },
  { label: "Designation", id: "designation", type: "text" },
  { label: "Email", id: "email", type: "email" },
  { label: "Mobile", id: "mobile", type: "number" }
];
export const pgTextFileds2 = [
  { label: "Room Size", id: "roomsize", type: "text" }
];

export const pgTextFileds3 = [{ label: "Budget", id: "budget", type: "text" }];
/* text fileds */
/* check box */
export const rwindowView = [
  { label: "Sky View", id: "skyview" },
  { label: "Pool View", id: "poolview" },
  { label: "Garden View", id: "gardenview" },
  { label: "Parking View", id: "Parkingview" },
  { label: "Club House View", id: "clubhouseview" },
  { label: "Main intrance Gate View", id: "maingateview" },
  { label: "Outer Building View", id: "outerbuildingview" }
];
export const rfacilities = [
  { label: "Swiming Pool", id: "swimingpool" },
  { label: "Club House", id: "clubhouse" },
  { label: "Indoor Sports", id: "indoorsports" },
  { label: "Outdoor Sports", id: "outdoorsports" },
  { label: "Garden", id: "garden" },
  { label: "Car Parking", id: "carparking" },
  { label: "Temple", id: "temple" },
  { label: "School", id: "school" },
  { label: "Hospital", id: "hospital" }
];
export const cmcrFacilities = [
  { label: "Car Parking", id: "carparking" },
  { label: "Water 24hr", id: "water24hr" }
];
export const pgFacilities = [
  { label: "Gim", id: "gim" },
  { label: "Pool", id: "pool" },
  { label: "Sports", id: "sports" },
  { label: "Parking", id: "parking" },
  { label: "Study Table", id: "studytable" },
  { label: "Alram", id: "alram" },
  { label: "Locker", id: "locker" },
  { label: "Kitchen", id: "kitchen" }
];
export const hFacilities = [
  { label: "Gim", id: "gim" },
  { label: "Pool", id: "pool" },
  { label: "Bar", id: "bar" },
  { label: "Banquet Hall", id: "banquethall" },
  { label: "Kitchen", id: "kitchen" },
  { label: "Parking", id: "parking" }
];

export const nearBy = [
  { label: "Police Station", id: "policestation" },
  { label: "Railway Station", id: "railwaystation" },
  { label: "Metro Station", id: "metrostation" },
  { label: "Hospital", id: "hospital" }
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
  { label: "Hotel Type", id: "noorooms", options: ["Safe", "DBL", "Sweet"] }
];
export const rrSelectFields = [
  { label: "No.of Rooms", id: "noorooms", options: _.range(1, 6) },
  {
    label: "Restaurant Type",
    id: "noorooms",
    options: ["Safe", "DBL", "Sweet"]
  },

  { label: "Seatry", id: "seatry", options: [20, 50, 100, 150] }
];
/* select option */
