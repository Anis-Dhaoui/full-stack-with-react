import * as actiontype from './actionsType';

export const Comments = (state = {errMsg: null, mountedComments: []}, action) =>{
    switch(action.type){
        case actiontype.POST_COMMENT:
            var comment = action.payload;
            return {...state, mountedComments: state.mountedComments.concat(comment)};

        case actiontype.ADD_COMMENTS:
            return {
                ...state, errMsg: null, mountedComments: action.payload
            };
        
            case actiontype.COMMENTS_FAILED:
                return {
                    ...state, errMsg: action.payload, mountedComments: []
                };
            
        default:
            return state;
    };
};