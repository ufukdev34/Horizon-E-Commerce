import { from, ignoreElements, map, mergeMap, toArray,pipe } from "rxjs"
import { ofType } from "redux-observable"
import * as ACTIONS from '../redux/actions/cartActions'



const changeAmountEpic = (action$,state$) =>{
    
    return action$.pipe(
        ofType(ACTIONS.CHANGE_AMOUNT),
        map(action=>({action,cart:state$.value.cart})),
        map(object=>{
            let cart = object.cart
            let action = object.action

            let itemToChange = cart.find(item=>item?._id === action.payload?._id)
            itemToChange.quantity = action.payload?.quantity
            
            
            return (itemToChange)
        }),
        map(itemToChange=>({type:ACTIONS.CHANGE_AMOUNT,payload:itemToChange})),
        ignoreElements()
    )
}

export default changeAmountEpic