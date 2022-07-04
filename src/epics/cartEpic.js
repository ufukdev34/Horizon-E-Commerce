import { ignoreElements, map, mergeMap, toArray } from "rxjs"
import { ofType } from "redux-observable"
import * as ACTIONS from '../redux/actions/cartActions'



const changeAmountEpic = (action$,state$) =>{

    return action$.pipe(
        ofType(ACTIONS.CHANGE_AMOUNT),
        map(action=>{
            return{
                state:state$.value.cart,
                action:action
            }
        }),
        map(object=>object),
        map(object=>{
            const action = object.action
            const cart = object.state

            let itemToChange = cart.find(item=>item?._id === action.payload?._id)
            let newCart = []
            
            itemToChange.quantity = action.payload?.quantity

            newCart = [...cart.filter(item=>item?._id !== itemToChange?._id),itemToChange]

            return {type:ACTIONS.CHANGE_AMOUNT,payload:action.payload}
        }),
        ignoreElements()
    )
}

export default changeAmountEpic