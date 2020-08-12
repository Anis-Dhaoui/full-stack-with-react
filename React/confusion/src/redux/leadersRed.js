import * as actiontype from './actionsType'
export const Leaders = (state = { isLoading: true, errMsg: null, mountedLeaders: [] }, action) =>{
    switch(action.type){
        case actiontype.ADD_LEADERS:
            return({
                ...state, isLoading: false, errMsg: null, mountedLeaders: action.payload
            });
        case actiontype.LEADERS_LOADING:
            return({
                ...state, isLoading: true, errMsg: null, mountedLeaders: []
            });
        case actiontype.LEADERS_FAILED:
            return({
                ...state, isLoading: false, errMsg: action.payload, mountedLeaders: [] 
            });
        default:
            return state;
    }
}