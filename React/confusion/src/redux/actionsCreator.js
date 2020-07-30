import * as actiontype  from './actionsType'
import { DISHES } from "../shared/dishesx";

export const addComment = (dishIdx, ratingx, authorx, commentx) =>({
    type: actiontype.ADD_COMMENT,
    payload:{
        dishId: dishIdx,
        rating: ratingx,
        author: authorx,
        comment: commentx
    }
});

export const fetshDishes = ()=> (dispatch)=>{
    dispatch(dishesLoading());

    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000);
};

export const dishesLoading = ()=>({
    type: actiontype.DISHES_LOADING
});

// export const dishesFailed = (errmsg)=>({
//     type: actiontype.DISHES_FAILED,
//     payload: errmsg
// });

export const addDishes = (dishes)=>({
    type: actiontype.ADD_DISHES,
    payload: dishes
});