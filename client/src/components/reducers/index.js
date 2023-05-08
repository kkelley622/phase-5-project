import { combineReducers } from "redux";
import medsReducer from "./medsReducer";
import prescriptionsReducer from "./prescriptionsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    medsReducer,
    prescriptionsReducer,
    usersReducer
})