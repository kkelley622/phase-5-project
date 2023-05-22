const initialState = [];

const providersReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOAD_PROVIDERS":
            return action.payload
        default:
            return state
    }
}

export default providersReducer;