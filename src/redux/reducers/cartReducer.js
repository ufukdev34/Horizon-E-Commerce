import * as ACTIONS from '../actions/cartActions'

const defaultState = {
    cart:[]
}

export default function(state=defaultState,action){
    switch(action.type){

        case ACTIONS.ADD_TO_CART:
            return{
                ...state,
                cart:[...state.cart,action.payload]
            }
        case ACTIONS.REMOVE_FROM_CART:
            return{
                ...state,
                cart:[action.payload]
            }
                
       default:
            return state
    }
}