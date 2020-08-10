import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { LoginForm } from './FormsComponent';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);

  };

  toggleNav (){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  };

  toggleModalRef = ({toggleModal}) =>{
    this.showModal = toggleModal;
  };

  onLoginClick = () =>{
    this.showModal()
  };
  
  render(){
    return(
      <React.Fragment>
        <Navbar dark expand="md">
            <div className="container">
                <NavbarBrand className="mr-auto" href="/">
                    <img src='../assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse navbar >
                  <Nav navbar className="mx-auto">
                    <NavItem>
                      <NavLink className="nav-link" to="/home"> <span className="fa fa-home fa-lg"></span> Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/aboutus"> <span className="fa fa-info fa-lg"></span> About Us</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/menu"> <span className="fa fa-list fa-lg"></span> Menu</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/contactus"> <span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="ml-auto" navbar onClick={this.onLoginClick}>
                    <NavItem className="ml-5">
                        <Button outline color="primary"><span className="fa fa-sign-in fa-lg"> Login</span></Button>
                    </NavItem>
                  </Nav>
                </Collapse>
            </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
              <div className="row row-header">
                  <div className="col-12 col-sm-6">
                    <h1>Ristorante con Fusion</h1>
                    <p>We take inspiration from the World's best cuisines, 
                         and create a unique fusion experience. Our lipsmacking 
                         creations will tickle your culinary senses!
                    </p>
                  </div>
              </div>
          </div>
        </Jumbotron>
        <LoginForm ref={this.toggleModalRef} />
      </React.Fragment>
    )
  }
};
export default Header;