import * as actiontype from "./actionsType";

export const Promotions = (state = {isLoading: true, errMsg: null, mountedPromotions: []}, action) =>{
    switch(action.type){
        case actiontype.ADD_PROMOS:
            return{
                ...state, isLoading: false, errMsg: null, mountedPromotions: action.payload
            };

        case actiontype.PROMOS_LOADING:
            return{
                ...state, isLoading: true, errMsg: null, mountedPromotions: []
            };

        case actiontype.PROMOS_FAILED:
            return{
                ...state, isLoading: false, errMsg: action.payload, mountedPromotions: []
            };

        default:
            return state;
    }
}