import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {...}
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 3,
      meat: 0
    }
  }

  render() {
    return (
      <div>
        <Aux>
          <Burger ingredients= {this.state.ingredients} />
          <div>Build Controls</div>
        </Aux>

      </div>
    );
  }
}
