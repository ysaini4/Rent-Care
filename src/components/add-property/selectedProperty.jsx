import React from "react";
import Corporate from "./corporate";
import Residential from "./residential";
import Commercial from "./commercial";
const SelectedProperty = props => {
  if (props.componentId === 1) return <Corporate />;
  else if (props.componentId === 2) return <Commercial />;
  else if (props.componentId === 3) return <Residential />;
  else return null;
};

export default SelectedProperty;
