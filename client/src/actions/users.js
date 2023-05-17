import { clearErrors, setErrors } from "./errors";

export const loadCurrentUser = () => {
    return dispatch => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            const action = { type: "LOGIN_USER", payload: data}
            dispatch(action)
        })
    }
};

export const signupUser = (user, navigate) => {
    return dispatch => {
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.errors) {
                dispatch(setErrors(data.errors))    
            } else {
                const action = { type: "SIGNUP_USER", payload: data }
                dispatch(action)
                dispatch({ type: "LOGIN_USER", payload: data })
                dispatch(clearErrors())
                navigate('/:user_name')
            }
        })
    }
}

export const loginUser = (user, navigate) => {
    return dispatch => {
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.errors) {
                dispatch(setErrors(data.errors))
            } else {
                const action = { type: "LOGIN_USER", payload: data }
                dispatch(action)
                dispatch(clearErrors())
                navigate('/:user_name')
            }
        })

    }
};

export const logoutUser = () => {
    return { type: "LOGOUT_USER"}
};