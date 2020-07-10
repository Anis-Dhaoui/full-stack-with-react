import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody} from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
    };

    renderDish(dish){
        if(dish != null){
            return (
                <Card>
                    <CardImg with="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
    };

    renderComments(dish) {
        if (dish != null){
            const arrOfCmnts = dish.comments;
            let result = arrOfCmnts.map((item) =>{
                let splittedDate = item.date.split("-");
                let finalDate = new Date(splittedDate[0], splittedDate[1] - 1, splittedDate[2].slice(0,2)).toDateString();
                return(
                    <ul className="list-unstyled mt-4 ml-1">
                        <li style={{font:"18px Arial, sans-serif"}}>{item.comment}</li>
                        <li style={{color:"gray"}}> -- <strong>{item.author}, </strong> {finalDate}</li>
                    </ul>
                      )
               })
            return(
                <div>
                    <h4>Comments</h4>
                    {result}
                </div>
            )
        };
}

    render(){
       const renderedDish = this.renderDish(this.props.dish);
       const renderedComments = this.renderComments(this.props.dish);

        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {renderedDish}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {renderedComments}
                </div>
            </div>
        )
    }
}

export default DishDetail;