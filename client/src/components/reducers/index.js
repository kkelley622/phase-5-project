import { combineReducers } from "redux";
import medsReducer from "./medsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    medsReducer,
    usersReducer
})