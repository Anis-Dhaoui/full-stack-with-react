import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishesRed';
import { Comments } from './commentsRed';
import { Leaders } from './leadersRed';
import { Promotions } from './promotionsRed';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigStore = () =>{
  const  store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      leaders: Leaders,
      promotions: Promotions
    }),
    applyMiddleware(thunk, logger)
  );
    return store;
}