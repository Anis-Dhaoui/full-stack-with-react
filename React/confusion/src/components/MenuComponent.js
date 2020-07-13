import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

function RenderMenuItem({dishx, clickx}) {
  return(
<Card key={dishx.id} onClick={() => clickx(dishx.id)}>
    <CardImg width="100%" src={dishx.image} alt={dishx.name} />
    <CardImgOverlay>
        <CardTitle>{dishx.name}</CardTitle>
    </CardImgOverlay>
</Card>

  )
};

const Menu = (props) => {
  const menu = props.dishes2.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1">
        <RenderMenuItem dishx={dish} clickx={props.click} /> 
      </div>
    );
});
return (
    <div className="row">
          {menu}
    </div>
);
}
export default Menu;
