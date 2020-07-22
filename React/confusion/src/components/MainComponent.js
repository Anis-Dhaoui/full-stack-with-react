import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { mapStateToProps } from '../redux/connectStore';

class Main extends Component {
  
  constructor(props){
    super(props);
  };

  render(){
    const homePage = () =>{
      return(
        <Home dish={this.props.dishes.filter((dishItem) => dishItem.featured)[0]}
              promo={this.props.promotions.filter((promoItem) => promoItem.featured)[0]} 
              leader={this.props.leaders.filter((leaderItem) => leaderItem.featured)[0]}
        />
      );
    };

    const dishWithId = ({match}) =>{
      return(
        <DishDetail dish={this.props.dishes.filter((ddItem) =>  ddItem.id === parseInt(match.params.dishId, 10))[0]} 
                    cmnts={this.props.comments.filter((cmntsItem) => cmntsItem.dishId === parseInt(match.params.dishId, 10))}
        />
      );
      
    };
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/home" component={homePage} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
          <Route exact path="/menu" component={() => <Menu dishes2={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={dishWithId}  />
          <Route path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps) (Main));
