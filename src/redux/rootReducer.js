import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import categoryReducer from "./reducers/categoryReducer"

export default combineReducers({authReducer,categoryReducer})