import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { mapStateToProps, mapDispatchToProps } from '../redux/connectStore';

class Main extends Component {

  componentDidMount(){
    this.props.fetshDishes();
  }
  
  render(){
    const homePage = () =>{
      return(
        <Home dish={this.props.dishes.mountedDishes.filter((dishItem) => dishItem.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrorMsg={this.props.dishes.errMsg}
              promo={this.props.promotions.filter((promoItem) => promoItem.featured)[0]} 
              leader={this.props.leaders.filter((leaderItem) => leaderItem.featured)[0]}
        />
      );
    };

    const dishWithId = ({match}) =>{
      return(
        <DishDetail dish={this.props.dishes.mountedDishes.filter((ddItem) =>  ddItem.id === parseInt(match.params.dishIdx, 10))[0]}
                    loading={this.props.dishes.isLoading}
                    errorMsg={this.props.dishes.errMsg}
                    cmnts={this.props.comments.filter((cmntsItem) => cmntsItem.dishId === parseInt(match.params.dishIdx, 10))}
                    addCmnt={this.props.addComment}
        />
      );
      
    };
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/home" component={homePage} />
          <Route path="/aboutus" component={  () => <About leaders={this.props.leaders}/>  } />
          <Route exact path="/menu" component={  () => <Menu dishes2={this.props.dishes} />  } />
          <Route path="/menu/:dishIdx" component={dishWithId}  />
          <Route path="/contactus" component={ () => <Contact resetFeedback={this.props.resetFeedbackForm} />} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Main);
