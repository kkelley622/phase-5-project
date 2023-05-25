import { loadAppointments } from "./appointments";
import { clearErrors, setErrors } from "./errors";
import { loadPrescriptions } from "./prescriptions";
import { loadProblems } from "./problems";
import { loadProcedures } from "./procedures";

export const loadCurrentUser = () => {
    return dispatch => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: "LOGIN_USER", payload: data}
                dispatch(action)
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
                dispatch({ type: "LOGIN_USER", payload: data })
                dispatch(clearErrors())
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
                dispatch(loadAppointments())
                dispatch(loadPrescriptions())
                dispatch(loadProblems())
                dispatch(loadProcedures())
                navigate('/')
            } else {
                dispatch(setErrors(data.errors))
            }
        })

    }
};

export const logoutUser = () => {
    return dispatch => {
        dispatch({ type: "LOGOUT_USER"})
    }
};