import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      isNavOpen : false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  };

  toggleNav (){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  };

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  };

  handleLogin(event){
    alert("User Name: " + this.user.value + " Password: " + this.pwd.value + " Remember: " + this.remember.checked);
    event.preventDefault();
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
                <Collapse navbar isOpen={this.state.isNavOpen}>
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
                  <Nav className="ml-auto" navbar onClick={this.toggleModal}>
                    <NavItem>
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
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleLogin}>
            <FormGroup>
              <Label htmlFor="username">User Name:</Label>
              <Input type="text" name="username" id="username" innerRef={(userInput) => this.user = userInput} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password:</Label>
              <Input type="password" name="password" id="password" innerRef={(userInput) => this.pwd = userInput} />
            </FormGroup>
            <FormGroup check>
              <Label check>
              <Input type="checkbox" name="rememberMe" innerRef={(userInput) => this.remember = userInput} />
              Remember Me
              </Label>
            </FormGroup>
            <Button type="submit" color="primary">Login</Button>     
          </Form>
        </ModalBody>
      </Modal>
      </React.Fragment>
    )
  }
};
export default Header;