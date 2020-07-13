import React from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody} from 'reactstrap';


   function RenderDish ({dish}){
    console.log(dish);
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
        }else return (<div></div>);
    };

    function RenderComments ({cmnts}) {
        if (cmnts != null){
            let result = cmnts.map((item) =>{
                let splittedDate = item.date.split("-");
                let finalDate = new Date(splittedDate[0], splittedDate[1] - 1, splittedDate[2].slice(0,2)).toDateString();
                return(
                    <ul className="list-unstyled pb-3">
                        <li style={{font:"18px Arial, sans-serif"}}>{item.comment}</li>
                        <li style={{color:"gray"}}> -- <strong>{item.author}, </strong> {finalDate}</li>
                    </ul>
                      )
               })
            return(
                <div>
                    <h4 className="pb-4">Comments</h4>
                    {result}
                </div>
            )
        }else return (<div></div>);
}

const DishDetail = (props) => {
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments cmnts={props.cmnts} />
                </div>
            </div>
        )
    };

export default DishDetail;