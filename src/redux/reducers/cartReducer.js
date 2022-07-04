import * as ACTIONS from '../actions/cartActions'

const defaultState = {
    cart:[],
    itemCount:0
}

const changeCount = (cartToCount) => {
    let total = 0
    cartToCount.map(item=>{
        total = item?.quantity + total
    })
    return total
}

export default function(state=defaultState,action){
    switch(action.type){
        case ACTIONS.ADD_TO_CART:
            return{
                ...state,
                itemCount:changeCount([...state.cart,action.payload]),
                cart:[...state.cart,action.payload]
            }
        /* case ACTIONS.REMOVE_FROM_CART:
            return{
                ...state,
                itemCount:changeCount(),
                cart:[action.payload]
            } */

        case ACTIONS.CHANGE_AMOUNT:
            let itemToChange = state.cart.find(item=>item?._id === action.payload?._id)
            let newCart = []
            
            itemToChange.quantity = action.payload?.quantity

            newCart = [...state.cart.filter(item=>item?._id !== itemToChange?._id),itemToChange]

            return{
                ...state,
                itemCount:changeCount(newCart),
                cart:newCart
            }

       default:
            return state
    }
}