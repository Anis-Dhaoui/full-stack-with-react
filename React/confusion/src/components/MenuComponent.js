import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';

function RenderMenuItem({dishx}) {
  return(
    <Link to={`/menu/${dishx.id}`}>
      <Card key={dishx.id}>
          <CardImg width="100%" src={dishx.image} alt={dishx.name} />
          <CardImgOverlay>
              <CardTitle>{dishx.name}</CardTitle>
          </CardImgOverlay>
      </Card>
    </Link>

  )
};

const Menu = (props) => {
  const menu = props.dishes2.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1">
        <RenderMenuItem dishx={dish} /> 
      </div>
    );
});
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
