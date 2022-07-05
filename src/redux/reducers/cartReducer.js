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
        case ACTIONS.REMOVE_FROM_CART:
            return{
                ...state,
                itemCount:changeCount(),
                cart:state.cart.filter(item=>item._id !== action.payload)
            }

        case ACTIONS.CHANGE_AMOUNT:
            let cartOfOperation = [...state.cart]
          
            cartOfOperation.find(item=>item._id === action.payload._id).quantity = action.payload.quantity
            
            return{
                ...state,
                itemCount:changeCount(cartOfOperation),
                cart:cartOfOperation
            }

        case ACTIONS.CLEAR_CART:
            return{
                ...state,
                itemCount:0,
                cart:[]
            }
       default:
            return state
    }
}
