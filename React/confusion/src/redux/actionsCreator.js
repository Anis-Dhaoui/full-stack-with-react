import * as actiontype  from './actionsType'

export const addComment = (dishIdx, ratingx, authorx, commentx) =>({
    type: actiontype.ADD_COMMENT,
    payload:{
        dishId: dishIdx,
        rating: ratingx,
        author: authorx,
        comment: commentx
    }
});