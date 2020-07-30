import { addComment, fetshDishes } from './actionsCreator';

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
      addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
//This is for connect to the store but this time using a Redux-thunk function...
      fetshDishes: () => dispatch(fetshDishes())
  })