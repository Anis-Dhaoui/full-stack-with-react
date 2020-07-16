import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { DISHES } from "../shared/dishesx";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";


class Main extends Component {
  
  constructor(props){
    super(props);
      this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS
      };
  };

  render(){
    const homePage = () =>{
      return(
        <Home dish={this.state.dishes.filter((dishItem) => dishItem.featured)[0]}
              promo={this.state.promotions.filter((promoItem) => promoItem.featured)[0]} 
              leader={this.state.leaders.filter((leaderItem) => leaderItem.featured)[0]}
        />
      );
    };
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/home" component={homePage} />
          <Route exact path="/menu" component={() => <Menu dishes2={this.state.dishes} />} />
          <Route path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
  }
}

export default Main;
