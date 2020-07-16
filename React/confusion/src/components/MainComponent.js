import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from "../shared/dishesx";

class Main extends Component {
  
  constructor(props){
    super(props);
      this.state = {
        dishes: DISHES,
        selectedDish: null
      };
  };

  render(){
    const homePage = () =>{
      return(
        <Home />
      );
    };
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/home" component={homePage} />
          <Route exact path="/menu" component={() => <Menu dishes2={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
  }
}

export default Main;
