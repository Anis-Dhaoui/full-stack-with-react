import * as actiontype  from './actionsType'

export const Dishes = (state = {isLoading: true, errMsg: null, mountedDishes: []}, action) =>{
    switch(action.type){
        case actiontype.ADD_DISHES:
            return{
                ...state, isLoading: false, errMsg: null, mountedDishes: action.payload
            };

        // case actiontype.DISHES_LOADING:
        //     return{
        //         ...state, isLoading: true, errMsg: null, mountedDishes: []
        //     };

        // case actiontype.DISHES_FAILED:
        //     return{
        //         ...state, isLoading: false, errMsg: action.payload, mountedDishes: []
        //     };
        
        default:
            return state;
    }
}