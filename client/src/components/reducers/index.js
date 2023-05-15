import { combineReducers } from "redux";
import appointmentsReducer from "./appointmentsReducer";
import medsReducer from "./medsReducer"
import prescriptionsReducer from "./prescriptionsReducer";
import problemsReducer from "./problemsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    appointmentsReducer,
    medsReducer,
    prescriptionsReducer,
    problemsReducer,
    usersReducer
})