import React from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import { RenderDish, RenderComments} from './RenderComponent';
import { CommentForm } from './FormsComponent';
import { Loading } from './LoadingComponent';

const DishDetail = (props) => {
    if(props.loading === true){
        return(
                <Loading />
        );
    } else if(props.errorMsg){
      return(
          <h4>Error Message By Anis</h4>
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
                        <RenderComments cmnts={props.cmnts}/>
                        <CommentForm addCmnt={props.addCmnt} dishId={props.dish.id} />

                    </div>
                </div>
            </div>
        );
    }else return (<div></div>);
    };

export default DishDetail;