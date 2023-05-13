const initialState = [];

const medsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOAD_MEDS":
            return action.payload
        default:
            return state
    }
};

export default medsReducer; 