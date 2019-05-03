export const propertyBox = type => {
  if (type === "corporate") {
    return {
      content1: ["Facing", "Approx Area"],
      content2: ["Car Parking", "Water 24hr"]
    };
  }
  if (type === "commercial") {
    return {
      content1: ["Facing", "Approx Area"],
      content2: ["Car Parking", "Water 24hr"]
    };
  }
  if (type === "residential") {
    return {
      content1: ["Badrooms", "Bathrooms"],
      content2: ["Swiming Pool", "Club House", "Car Parking"]
    };
  }
  if (type === "pg") {
    return {
      content1: ["Room Size", "Four Sharing Rooms", "Triple Sharing Rooms"],
      content2: ["Gim", "Pool", "Sports"]
    };
  }
  if (type === "hotel") {
    return {
      content1: ["Hotel Type"],
      content2: ["Gim", "Pool", "Bar"]
    };
  }
  if (type === "restaurant") {
    return {
      content1: ["Restaurant Type", "Seatry", "Approx Area"],
      content2: ["Gim", "Pool", "Bar"]
    };
  }
};
