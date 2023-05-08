const initialState = [];

const prescriptionsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOAD_PRESCRIPTIONS":
            return action.payload
        default:
            return state 
    }
};

export default prescriptionsReducer;