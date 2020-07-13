import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from "./MenuComponent";
import DishDetail from './DishdetailComponent';
import {DISHES} from "../shared/dishesx";

class Main extends Component {
  
  constructor(props){
    super(props);
      this.state = {
        dishes: DISHES,
        selectedDish: null
      };
  };

  onDishSelect(dishArg){
    this.setState({selectedDish: dishArg});
  };

  render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            Ristorente Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      <div className="container">
          <Menu dishes2={this.state.dishes} click={(dishId) => this.onDishSelect(dishId)} />
          <DishDetail dish={this.state.dishes.filter((checkDish) => checkDish.id === this.state.selectedDish)[0]}
                      cmnts={this.state.dishes.filter((item) => item.id === this.state.selectedDish)
                      .map((item) => item.comments)[0]} />
      </div>
    </div>
  );
  }
}

export default Main;
