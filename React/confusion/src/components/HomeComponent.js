import React from 'react';
import {RenderCard} from './RenderComponent';

function Home (props) {
    return(
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md m-1">
              <RenderCard item={props.dish} />
            </div>
            <div className="col-12 col-md m-1">
              <RenderCard item={props.promo} />
            </div>
            <div className="col-12 col-md m-1">
              <RenderCard item={props.leader} />
            </div>

          </div>
        </div>
    );
};

export default Home;