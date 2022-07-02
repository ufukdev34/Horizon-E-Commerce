import * as ACTIONS from '../actions/categoryActions'

const defaultState = {
    categoryName:"",
    productsOfCategory:[]
}

export default function(state=defaultState,action){
    switch(action.type){

        case ACTIONS.FETCH_CATEGORY:
            return{
                ...state,
                categoryName: action.payload.categoryName,
                productsOfCategory:[
                    ...state.productsOfCategory,
                    ...action.payload
                ]
            }

       default:
            return state
    }
}