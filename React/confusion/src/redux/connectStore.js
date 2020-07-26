import { addComment } from './actionsCreator';

//Connect the app to the Redux Store 
export const mapStateToProps = (props) =>{
    return{
        dishes: props.dishes,
        comments: props.comments,
        promotions: props.promotions,
        leaders: props.leaders    
    };
  };
  
//Connect...
  export const mapDispatchToProps = (dispatch) =>({
      addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  })