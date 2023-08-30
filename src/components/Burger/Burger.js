import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import classes from "./Burger.module.css"



const burger = (props) =>{
  let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey =>{
          return [...Array(props.ingredients[igKey])].map((_,i) => {
           return <BurgerIngredients key={igKey + i} type = {igKey}/>
          })
        }).reduce((a, b)=>{
          return a.concat(b)
        }, [])

        if (transformedIngredients.length === 0) {
          transformedIngredients = <h1>Please add ingredients</h1>
        }

        return (
          <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />

              {transformedIngredients}

            <BurgerIngredients type="bread-bottom" />
          </div>
        );

}

export default burger;
