import * as ACTIONS from '../actions/authActions'

const defaultState = {
    isLoggedIn:false,
    userCredentials:{
        name:"",
        surname:"",
    }
}

export default function(state=defaultState,action){
    switch(action.type){

        case ACTIONS.USER_LOGGED_IN:
            return{
                ...state,
                isLoggedIn:true,
                userCredentials:{
                    name:action.payload.name,
                    surname:action.payload.surname
                }
            }

        case ACTIONS.USER_LOGGED_OUT:
            return{
                ...state,
                isLoggedIn:false,
                userCredentials:{
                    name:"",
                    surname:""
                }
            }

        default:
            return state

    }
}