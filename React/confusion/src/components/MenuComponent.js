import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { RenderMenuItem } from './RenderComponent';
import { Loading } from './LoadingComponent';

const Menu = (props) => {
  const menu = props.dishes2.mountedDishes.map((dish) => {
        return (
          <div className="col-12 col-md-5 m-1">
            <RenderMenuItem dishx={dish} /> 
          </div>
        );
    });
  
  if(props.dishes2.isLoading){
      return(
              <Loading />
      );
  }else if(props.dishes2.errMsg){
    return(
        <h4>Error Message By Anis</h4>
    )
  }else
 return (
      <>
        <div className="row">
          <div className="col-12">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>

        <div className="row">
              {menu}
        </div>
      </>
    );
}
export default Menu;
