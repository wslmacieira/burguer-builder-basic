import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
  const transformedIgredients = Object.keys(props.ingredients)
  .map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient igKey={igKey + i} type={igKey} />;
    })
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIgredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger;
