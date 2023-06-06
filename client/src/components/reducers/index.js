import { combineReducers } from "redux";
import appointmentsReducer from "./appointmentsReducer";
import errorsReducer from "./errorsReducer";
import medsReducer from "./medsReducer"
import prescriptionsReducer from "./prescriptionsReducer";
import problemsReducer from "./problemsReducer";
import proceduresReducer from "./proceduresReducer";
import providersReducer from "./providersReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    appointmentsReducer,
    errorsReducer,
    medsReducer,
    prescriptionsReducer,
    problemsReducer,
    proceduresReducer,
    providersReducer,
    usersReducer
})


