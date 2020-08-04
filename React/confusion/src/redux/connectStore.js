import { postComment, fetchDishes, fetchComments, fetchPromotions } from './actionsCreator';
import { actions } from 'react-redux-form';

//Connect the app to the Redux Store 
export const mapStateToProps = (x) =>{
    return{
        dishes: x.dishes,
        comments: x.comments,
        promotions: x.promotions,
        leaders: x.leaders
    };
  };
  


  
//This Dispatch Function help us to Connect the action "addComment" function with the Reducer function Comments
  export const mapDispatchToProps = (dispatch) =>({
      postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
//This is for connecting to the store but this time using a Redux-thunk function...
      fetchDishes: () => dispatch(fetchDishes()),
//This is to reset the feedback Form in contact us page
      resetFeedbackForm: () => dispatch(actions.reset("feedback")),
//This is for connecting to the store in order to fetch the comments from db.json file
      fetchComments: () => dispatch(fetchComments()),
//This is for connecting to the store in order to fetch the promotions from db.json file
      fetchPromotions: () => dispatch(fetchPromotions())
  });