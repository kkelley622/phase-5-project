const initialState = [];

const proceduresReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOAD_PROCEDURES":
            return action.payload 
        default:
            return state 
    }
};

export default proceduresReducer;