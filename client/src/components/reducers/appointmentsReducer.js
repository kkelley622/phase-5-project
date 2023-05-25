import { addResource, updateResource } from "../../Globals";

const initialState = [];

const appointmentsReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOAD_APPOINTMENTS":
            return action.payload
        case 'ADD_APPOINTMENT':
            return  addResource(state, action.payload)
        case 'EDIT_APPOINTMENT':
            return updateResource(state, action.payload)
        case "DELETE_APPOINTMENT":
            return state.filter(app => app.id !== action.payload)
        default:
           return state 
    }
};

export default appointmentsReducer;