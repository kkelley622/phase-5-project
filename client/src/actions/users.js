import { loadAppointments } from "./appointments";
import { clearErrors, setErrors } from "./errors";
import { loadPrescriptions } from "./prescriptions";
import { loadProblems } from "./problems";
import { loadProcedures } from "./procedures";

export const loadCurrentUser = (setLoading) => {
    return dispatch => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: "LOGIN_USER", payload: data}
                dispatch(action)
            }
            setLoading(false)
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
                dispatch({ type: "LOGIN_USER", payload: data })
                dispatch(clearErrors())
                dispatch(loadAppointments())
                dispatch(loadPrescriptions())
                dispatch(loadProblems())
                dispatch(loadProcedures())
                navigate('/')
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
                dispatch(loadAppointments())
                dispatch(loadPrescriptions())
                dispatch(loadProblems())
                dispatch(loadProcedures())
                navigate('/')
            }
        })

    }
};

export const logoutUser = (navigate) => {
    return dispatch => {
        dispatch({ type: "LOGOUT_USER"})
        navigate('/login')
    }
};