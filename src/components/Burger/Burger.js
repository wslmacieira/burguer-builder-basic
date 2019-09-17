import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
  let transformedIgredients = Object.keys(props.ingredients)
  .map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={i} igKey={igKey + i} type={igKey} />;
    })
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  }, [])
  
  if (transformedIgredients.length === 0) {
    transformedIgredients = <p>Please start adding igredients</p>
  }
  console.log(transformedIgredients)
  return (
    <div className={classes.Burger}>
      <BurgerIngredient key={props} type="bread-top" />
      {transformedIgredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger;
