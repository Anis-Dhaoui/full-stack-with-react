import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, CardBody, CardText, Media } from 'reactstrap';
import { baseUrl } from '../shared/baseURL';
import { Loading } from './LoadingComponent';

//This Component for the Home Page
export function RenderCard({item, dl, em}) {
    if(dl){
        return(
                <Loading />
        );
    } else if(em){
        return(
            <h4>Error Message By Anis</h4>
        );
    }else  
    return(
        <Card>
            <CardImg src={baseUrl + item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
};

//This Component for the About Page
export function RenderLeader({leader}){
    return(
        <div key={leader.id} className="mt-3">
            <Media tag="li">
                <Media left middle>
                    <img object className="mt-2" src={leader.image} alt={leader.name}/>
                </Media>
                <Media body className="ml-4">
                    <Media heading>{leader.name}</Media>
                    <Media className="my-2">{leader.designation}</Media>
                    <p className="pr-4">{leader.description}</p>
                </Media>
            </Media>
        </div>
    )
};

//This Component for the Menu Page
export function RenderMenuItem({dishx}) {  
    return(
      <Link to={`/menu/${dishx.id}`}>
        <Card key={dishx.id}>
            <CardImg width="100%" src={baseUrl + dishx.image} alt={dishx.name} />
            <CardImgOverlay>
                <CardTitle>{dishx.name}</CardTitle>
            </CardImgOverlay>
        </Card>
      </Link>
  
    )
  };

 //This Component for the menu item Description in the Menu Page that exported to the DishdetailComponet file
export function RenderDish ({dish}){
            return (
                <Card>
                    <CardImg with="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
};

 //This Component for the menu item Comments in the Menu Page that exported to the DishdetailComponet file
export function RenderComments ({cmnts}) {
        let comment = cmnts.map((item) =>{
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
                {comment}
            </div>
        )
};
