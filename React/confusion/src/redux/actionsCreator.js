import * as actiontype  from './actionsType';
import { baseUrl } from '../shared/baseURL';

export const postComment = (dishIdx, ratingx, authorx, commentx) =>({
    type: actiontype.POST_COMMENT,
    payload:{
        dishId: dishIdx,
        rating: ratingx,
        author: authorx,
        comment: commentx
    }
});

//Add dishes Action
export const addDishes = (dishes)=>({
    type: actiontype.ADD_DISHES,
    payload: dishes
});

export const fetchDishes = ()=> (dispatch)=>{
    dispatch(dishesLoading());
    return fetch(baseUrl + "dishes").then(response => response.json()).then(dishes => dispatch(addDishes(dishes)));
};

export const dishesLoading = ()=>({
    type: actiontype.DISHES_LOADING
});

export const dishesFailed = (errmsg)=>({
    type: actiontype.DISHES_FAILED,
    payload: errmsg
});

//Add comments Action
export const addComments = (comments) =>({
    type: actiontype.ADD_COMMENTS,
    payload: comments
});

export const fetchComments = ()=> (dispatch)=>{
    return fetch(baseUrl + 'comments').then(response => response.json()).then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmsg) =>({
    type: actiontype.COMMENTS_FAILED,
    payload: errmsg
});

//Add promotions Action
export const addPromos = (promos) =>({
    type: actiontype.ADD_PROMOS,
    payload: promos
});

export const fetchPromotions = ()=> (dispatch)=>{
    dispatch(promosLoading());
    return fetch(baseUrl + 'promotions').then(response => response.json()).then(promos => dispatch(addPromos(promos)));
};

export const promosLoading = ()=>({
    type: actiontype.PROMOS_LOADING
});

export const promosFailed =(errMsg)=>({
    type: actiontype.PROMOS_FAILED,
    payload: errMsg
});