import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from "./components/MenuComponent";
import './App.css';
import {DISHES} from "./shared/dishesx";

class App extends Component {
  
  constructor(props){
    super(props);
      this.state = {
        dishes: DISHES
      };
  };
  render(){
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            Ristorente Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes2={this.state.dishes} />
    </div>
  );
  }
}

export default App;
