import * as actiontype  from './actionsType';
import { baseUrl } from '../shared/baseURL';

//Post new comment action
export const addPostedComment = (comment) =>({
    type: actiontype.POST_COMMENT,
    payload: comment
});

export const postComment = (dishIdx, ratingx, authorx, commentx) => (dispatch) =>{
    const newComment ={
        dishId: dishIdx,
        rating: ratingx,
        author: authorx,
        comment: commentx
    };
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + "comments", {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin"
    })
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
        }
    },
    response2 =>{
        var errMsg = new Error("Check your Internet connection\n" + response2.message);
        throw errMsg;
    })
    .then(response => response.json())
    .then(response => dispatch(addPostedComment(response)))
    .catch(error =>{
               console.log("Post Comment", error.message);
               alert("Your comment couldn't be posted");
            }
    )
}
//Add dishes Action
export const addDishes = (dishes)=>({
    type: actiontype.ADD_DISHES,
    payload: dishes
});

export const fetchDishes = ()=> (dispatch)=>{
    dispatch(dishesLoading());
    return fetch(baseUrl + "dishes")
        .then(response => {
            if(response.ok){
                return response;
            }else{
                var errorx = new Error('Error ' + response.status + ': ' + response.statusText);
                //errorx.response = errorx;
                throw errorx;
            }
        },
            response2 =>{
                var errMess = new Error(response2.message + ", Check The Server");
                throw errMess; 
            }
        )
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
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
    return fetch(baseUrl + 'comments')
    .then(response =>{
        if(response.ok){ 
            return response;
        }
        else{
            var error = new Error("Error " + response.status + ": " + response.statusText);
            throw error;
        }
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
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
    return fetch(baseUrl + 'promotions')
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error("Error " + response.status + ": " + response.statusText);
            throw error;
        }
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
};

export const promosLoading = ()=>({
    type: actiontype.PROMOS_LOADING
});

export const promosFailed =(errMsg)=>({
    type: actiontype.PROMOS_FAILED,
    payload: errMsg
});

//Add Leaders action
export const addLeaders = (leaders) =>({
    type: actiontype.ADD_LEADERS,
    payload: leaders
});

export const fetchLeaders = () => (dispatch) =>{
    dispatch(leadersLoading())

    return fetch(baseUrl + "leaders")
    .then(response =>{
        if(response.ok){
            return response;
        }else{
            let error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
        }
    },
    response2 =>{
        var errMess = new Error(response2.message + ", Check The Server");
        throw errMess; 
    })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
};

export const leadersLoading = () =>({
    type: actiontype.LEADERS_LOADING,
});

export const leadersFailed = (errMsg) =>({
    type: actiontype.LEADERS_FAILED,
    payload: errMsg
});

//Post Feedback action
export const addPostedFeedback = (feedback) =>({
    type: actiontype.POST_FEEDBACK,
    payload: feedback
});

export const postFeedback = (feedbackObj) => (dispatch) =>{
    
    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(feedbackObj),
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin"

    })
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
        }
    },
    response2 =>{
        var errMsg = new Error("Check your Internet connection\n" + response2.message);
        throw errMsg;
    })
    .then(response => response.json())
    .then(feedback => {
            dispatch(addPostedFeedback(feedback));
            alert("Thank you! Your feedback is highly appreciated");
        })
    .catch(error =>{
             console.log("Error message" + error.message);
             alert("Unfortunately your feedback couldn't be sent");
        })
}