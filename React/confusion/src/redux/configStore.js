import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishesRed';
import { Comments } from './commentsRed';
import { Leaders } from './leadersRed';
import { Promotions } from './promotionsRed';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { initialFeedback } from './FeedbackFormState';

export const ConfigStore = () =>{
  const  store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      leaders: Leaders,
      promotions: Promotions,

      ...createForms({
        feedback: initialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );
    return store;
}