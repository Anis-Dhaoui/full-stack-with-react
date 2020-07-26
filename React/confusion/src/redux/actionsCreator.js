import * as actiontype  from './actionsType'

export const addComment = (dishId, rating, author, comment) =>({
    type: actiontype.ADD_COMMENT,
    payload:{
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});