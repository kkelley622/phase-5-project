import { addResource } from "../../Globals"

const initialState = [];

const proceduresReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOAD_PROCEDURES":
            return action.payload 
        case "ADD_PROCEDURE":
            return addResource(state, action.payload)
        case "DELETE_PROCEDURE":
            return state.filter(procedure => procedure.id !== action.payload)
        default:
            return state 
    }
};

export default proceduresReducer;