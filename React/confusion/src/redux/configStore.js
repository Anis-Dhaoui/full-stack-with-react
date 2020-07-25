import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishesRed';
import { Comments } from './commentsRed';
import { Leaders } from './leadersRed';
import { Promotions } from './promotionsRed';

export const ConfigStore = () =>{
  const  store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      leaders: Leaders,
      promotions: Promotions
    })
  );
    return store;
}