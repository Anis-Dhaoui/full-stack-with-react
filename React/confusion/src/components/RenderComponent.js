import React from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, CardText, Media } from 'reactstrap';

export function RenderCard({item}) {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
};

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
