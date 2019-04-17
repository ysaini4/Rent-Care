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

export const windowView = [
  { label: "Pool View", id: "poolview" },
  { label: "Garden View", id: "gardenview" },
  { label: "Parking View", id: "Parkingview" },
  { label: "Club House View", id: "clubhouseview" },
  { label: "Main intrance Gate View", id: "maingateview" },
  { label: "Outer Building View", id: "outerbuildingview" }
];
export const facilities = [
  { label: "Swiming Pool", id: "swimingpool" },
  { label: "Club House", id: "clubhouse" },
  { label: "Indoor Sports", id: "indoorsports" },
  { label: "Outdoor Sports", id: "outdoorsports" },
  { label: "Garden", id: "garden" },
  { label: "Car Parking", id: "carparking" },
  { label: "Temple", id: "temple" }
];
export const nearBy = [
  { label: "Police Station", id: "policestation" },
  { label: "Railway Station", id: "railwaystation" },
  { label: "Metro Station", id: "metrostation" },
  { label: "Hospital", id: "hospital" }
];
export const ptype = [
  { label: "Flats", id: "flats" },
  { label: "Individual House", id: "individualhouse" },
  { label: "Pvt. Villas", id: "pvtvillas" },
  { label: "Farm House", id: "farmhouse" }
];
export const textFileds = [
  { label: "Name", id: "name", type: "text" },
  { label: "Email", id: "email", type: "email" },
  { label: "Mobile", id: "mobile", type: "number" },
  { label: "Location", id: "location", type: "text" },
  { label: "City", id: "city", type: "text" }
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
export const selectFields = [
  { label: "Facing", id: "facing", options: facing },
  { label: "Having", id: "having", options: apprmentType },
  { label: "Furnish Type", id: "ftype", options: ftype },
  { label: "Floor", id: "floor", options: _.range(1, 26) },
  { label: "Badrooms", id: "badrooms", options: _.range(1, 6) },
  { label: "Balcony", id: "balcony", options: _.range(1, 6) },
  { label: "Bathrooms", id: "bathrooms", options: _.range(1, 6) }
];
