const initialState = [];

const appointmentsReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOAD_APPOINTMENTS":
            return action.payload
        default:
           return state 
    }
};

export default appointmentsReducer;