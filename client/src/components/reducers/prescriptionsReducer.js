const initialState = [];

const prescriptionsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOAD_PRESCRIPTIONS":
            return action.payload
        case "DELETE_PRESCRIPTION":
            return state.filter(prescription => prescription.id !== action.payload)
        default:
            return state 
    }
};

export default prescriptionsReducer;