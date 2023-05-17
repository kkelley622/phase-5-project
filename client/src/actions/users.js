import { clearErrors, setErrors } from "./errors";

export const loadCurrentUser = (setLoading) => {
    return dispatch => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: "LOGIN_USER", payload: data}
                dispatch(action)
            } else {
                setLoading(false)
            }
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
            if(!data.errors) {
                const action = { type: "LOGIN_USER", payload: data }
                dispatch(action)
                navigate('/:user_name')
            } else {
                dispatch(setErrors(data.errors))
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
            if(!data.errors) {
                const action = { type: "LOGIN_USER", payload: data }
                dispatch(action)
                dispatch(clearErrors())
                navigate('/:user_name')
            } else {
                dispatch(setErrors(data.errors))
            }
        })

    }
};

export const logoutUser = () => {
    return { type: "LOGOUT_USER"}
};