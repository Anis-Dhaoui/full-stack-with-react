import React from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import { RenderDish, RenderComments} from './RenderComponent';
import { CommentForm } from './FormsComponent';
import { Loading } from './LoadingComponent';

const DishDetail = (props) => {
    if(props.loading){
        return(
                <Loading />
        )
    }else if(props.errorMsg){
        return(
            <div className="container py-4 my-4">
                <div className="row justify-content-center">
                    <div className="col-auto my-4">
                        <h4>{props.errorMsg}</h4>
                    </div>
                </div>
            </div>
        )
    }else if(props.dish != null){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                        <BreadcrumbItem><Link to="/Menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
            
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4 className="pb-4">Comments</h4>
                        <RenderComments cmnts={props.cmnts} em={props.cmntsErrorMsg} />
                        <CommentForm postCmnt={props.postCmnt} dishId={props.dish.id} />
                    </div>
                </div>
            </div>
        );
    }else return (<div></div>);
    };

export default DishDetail;