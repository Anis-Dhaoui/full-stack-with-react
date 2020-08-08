import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { mapStateToProps, mapDispatchToProps } from '../redux/connectStore';
import { TransitionGroup, CSSTransition} from 'react-transition-group';

class Main extends Component {

  componentDidMount(){
    this.props.fetchDishesx();
    this.props.fetchPromotions();
    this.props.fetchComments();
  };
  
  render(){
    const homePage = () =>{
      return(
        <Home dish={this.props.dishes.mountedDishes.filter((dishItem) => dishItem.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrorMsg={this.props.dishes.errMsg}
              promo={this.props.promotions.mountedPromotions.filter((promoItem) => promoItem.featured)[0]} 
              promoLoading={this.props.promotions.isLoading}
              promoErrorMsg={this.props.promotions.errMsg}
              leader={this.props.leaders.filter((leaderItem) => leaderItem.featured)[0]}
        />
      );
    };

    const dishWithId = ({match}) =>{
      return(
        <DishDetail dish={this.props.dishes.mountedDishes.filter((ddItem) =>  ddItem.id === parseInt(match.params.dishIdx, 10))[0]}
                    loading={this.props.dishes.isLoading}
                    errorMsg={this.props.dishes.errMsg}
                    cmnts={this.props.comments.mountedComments.filter((cmntsItem) => cmntsItem.dishId === parseInt(match.params.dishIdx, 10))}
                    cmntsErrorMsg={this.props.comments.errMsg}
                    postCmnt={this.props.postComment}
        />
      );
      
    };

  return (
    <>
      <Header />
      <div className="container">
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch location={this.props.location}>
              <Route path="/home" component={homePage} />
              <Route path="/aboutus" component={  () => <About leaders={this.props.leaders}/>  } />
              <Route exact path="/menu" component={  () => <Menu dishes2={this.props.dishes} />  } />
              <Route path="/menu/:dishIdx" component={dishWithId}  />
              <Route path="/contactus" component={ () => <Contact resetFeedback={this.props.resetFeedbackForm} />} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </>
  );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Main));
