const initialState = [];

const problemsReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOAD_PROBLEMS":
            return action.payload
        case 'DELETE_PROBLEM':
            return state.filter(problem => problem.id !== action.payload)
        default:
            return state 
    }
};

export default problemsReducer;