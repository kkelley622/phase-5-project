const initialState = {
    users: [],
    currentUser: null,
    loggedIn: false,
};

const usersReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                currentUser: action.payload,
                loggedIn: true
            }
        default:
            return state; 
    }
};

export default usersReducer;