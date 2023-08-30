import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css"

const buildControls = (props) => {
  const controls = [
    { label: "Meat", type: "meat" },
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
  ];

  return (
    <div className={classes.BuildControls}>
      {controls.map((ctrl) => {
        return (
          <BuildControl label={ctrl.label} key={ctrl.label} added = {()=>props.plus(ctrl.type)}  removeIng = {()=>props.remove(ctrl.type)}/>
        );
      })}
    </div>
  );

}


export default buildControls;