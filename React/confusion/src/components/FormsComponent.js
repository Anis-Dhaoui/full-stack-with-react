import React, { Component } from 'react';
import { LocalForm, Control, Errors, Form} from 'react-redux-form';
import { Row, Label, Col, Button, Modal, ModalHeader, ModalBody, FormGroup, Input, Form as ReactstrapForm } from 'reactstrap';

const required = (val) => val;
const minMaxLength = (minLen, maxLen) => (val) => !val || (val.length >= minLen && val.length <= maxLen);
const isNumber = (val) => !isNaN(val);
const validEmail = (val) => !val || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


//This a form for the comment submit in the Menu Page
export class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isFormOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    toggleModal(){
        this.setState({
            isFormOpen: !this.state.isFormOpen
        })
    };
    handleSubmit(values) {
        this.toggleModal();
        this.props.postCmnt(this.props.dishId, values.rating, values.author, values.comment);
    };

    render(){
        return(
            <div className="mb-5">
                <Button onClick={this.toggleModal} outline color="success"><span className="fa fa-comment fa-lg"> Comment</span></Button>
                <Modal isOpen={this.state.isFormOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={value => this.handleSubmit(value)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" xs={12}>Rating</Label>
                                <Col xs={{size: 12, offset: 0}}>
                                    <Control.select model=".rating" id="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" xs={12}>Your name</Label>
                                <Col xs={12}>
                                    <Control.text model=".author" id="author" placeholder="Your name" className="form-control"
                                        validators={{
                                            required, minMaxLength: minMaxLength(3, 15)
                                        }}
                                    />
                                    <Errors className="text-danger" 
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: "Required field",
                                            minMaxLength: "Enter a valid name"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="comment" xs={12}>Comment</Label>
                                <Col xs={12}>
                                    <Control.textarea model=".comment" id="comment" placeholder="Type your comment here" rows="6" className="form-control" />
                                </Col>
                            </Row> 
                            <Row className="form-group">
                            <Col xs={{size: 3, offset:4}}>
                                <Button type="submit" color="primary">Submit</Button>
                            </Col>
                            </Row>                      
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
            )
    }
};

//This is a feedback form in the Contact us page
export class ContactForm extends Component{

    handleSubmit(values) {
        this.props.postFeedback(JSON.parse(JSON.stringify(values)));
        console.log('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackF();
    };

    render(){
        return(
            <Form model="feedback" onSubmit={(value) => this.handleSubmit(value)}>
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
        </Form>
        )
    }
};

//This is a Login Form in the Header Component
export class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    };

    toggleModal(){
        this.setState({
        isModalOpen: !this.state.isModalOpen
        })
    };

    handleLogin(event){
        alert("User Name: " + this.user.value + " Password: " + this.pwd.value + " Remember: " + this.remember.checked);
        event.preventDefault();
        this.toggleModal();
    };
    
    render(){
        return(
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <ReactstrapForm onSubmit={this.handleLogin}>
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
                                <Input type="checkbox" name="rememberMe" innerRef={(userInput) => this.remember = userInput} />Remember Me
                            </Label>
                        </FormGroup>
                        <Button type="submit" color="primary">Login</Button>     
                    </ReactstrapForm>
                </ModalBody>
            </Modal>
        )
    }
};