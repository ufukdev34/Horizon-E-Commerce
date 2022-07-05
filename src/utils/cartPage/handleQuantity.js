import * as ACTIONS from '../../redux/actions/cartActions'

const handleQuantity = (type,product,dispatch) => {
    switch(type){
        case "plus":
            let newQuantity = product.quantity + 1
                return(
                    dispatch({type:ACTIONS.CHANGE_AMOUNT,payload:{...product,quantity:newQuantity}})
                )

        case "minus":
            if(product.quantity > 0){
                let newQuantity = product.quantity - 1
                    return(
                        product.quantity === 0 ?
                        dispatch({type:ACTIONS.REMOVE_FROM_CART,payload:product._id})
                        :
                        dispatch({type:ACTIONS.CHANGE_AMOUNT,payload:{...product,quantity:newQuantity}})
                    )
            }
        default:
            return
}
}

export default handleQuantity