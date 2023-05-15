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
            const action = { type: "LOGIN_USER", payload: data }
            dispatch(action)
            navigate('/')
        })

    }
};

export const logoutUser = () => {
    return { type: "LOGOUT_USER"}
};