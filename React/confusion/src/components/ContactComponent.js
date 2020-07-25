import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Label, Button, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors} from 'react-redux-form';

export const required = (val) => val;
export const minMaxLength = (minLen, maxLen) => (val) => !val || (val.length >= minLen && val.length <= maxLen);
const isNumber = (val) => !isNaN(val);
const validEmail = (val) => !val || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
  

class Contact extends Component{

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
    
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="skype"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
                            <Row className="form-group">
                            <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text className="form-control" model=".firstName" id="firstName" placeholder="First Name" 
                                        validators={{
                                            required, minMaxLength: minMaxLength(3, 15)
                                        }}
                                    />
                                    <Errors className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        messages={{
                                            required: 'Rquired field',
                                            minMaxLength: 'Please enter a valid Name'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text className="form-control"  model=".lastName" id="LastName" placeholder="Last Name"
                                        validators={{
                                            required, minMaxLength: minMaxLength(3, 15)
                                        }}
                                    />
                                    <Errors className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        messages={{
                                            required: 'Rquired field',
                                            minMaxLength: 'Please enter a valid last name'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telNum" md={2}>Tel. Number</Label>
                                <Col md={10}>
                                    <Control.text className="form-control" model=".telNum" id="TelNum" placeholder="Tel. Number" 
                                        validators={{
                                            required, minMaxLength: minMaxLength(8, 12), isNumber
                                        }}
                                    />
                                    <Errors className="text-danger" 
                                        model=".telNum"
                                        show="touched"
                                        messages={{
                                            required: "Required field",
                                            minMaxLength: "Please enter a valid Phone number",
                                            isNumber: " ____ This field must contains only numbers"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text className="form-control" model=".email" id="email" placeholder="Email" 
                                        validators={{
                                            required, validEmail
                                        }}
                                    />
                                    <Errors className="text-danger" 
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: "Required field",
                                            validEmail: "Enter a valid email"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 7, offset:2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox className="form-check-input" model=".agree" id="agree" />
                                            <strong>May we contact you</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 2, offset: 1}}>
                                    <Control.select className="form-control" model=".contactType" id="contactType">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea className="form-control" rows="10" model=".message" id="message" placeholder="Your Feedback" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 3, offset:2}}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
    
        );    
    }
};

export default Contact;