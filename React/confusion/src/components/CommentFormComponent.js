import React, { Component } from 'react';
import { LocalForm, Control, Errors} from 'react-redux-form';
import { Row, Label, Col, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { minMaxLength, required } from './ContactComponent';

class FormComment extends Component{
    constructor(props){
        super(props);
        this.state = {
            isFormOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    };

    toggleModal(){
        this.setState({
            isFormOpen: !this.state.isFormOpen
        })
    };
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
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
                                <Control.select model=".rate" id="rate" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name" xs={12}>Your name</Label>
                            <Col xs={12}>
                                <Control.text model=".name" id="name" placeholder="Your name" className="form-control"
                                    validators={{
                                        required, minMaxLength: minMaxLength(3, 15)
                                    }}
                                />
                                <Errors className="text-danger" 
                                    model=".name"
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
}
export default FormComment;