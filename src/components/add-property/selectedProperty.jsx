import React from "react";
import Corporate from "./corporate";
import Residential from "./residential";
import Commercial from "./commercial";
import PG from "./pg";
import Hotel from "./hotel";
import Restaurant from "./restaurant";
const SelectedProperty = props => {
  if (props.componentId === 1) return <Corporate />;
  else if (props.componentId === 2) return <Commercial />;
  else if (props.componentId === 3) return <Residential />;
  else if (props.componentId === 4) return <PG />;
  else if (props.componentId === 5) return <Hotel />;
  else if (props.componentId === 6) return <Restaurant />;
  else return null;
};

export default SelectedProperty;
