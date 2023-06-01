import { clearErrors, setErrors } from "./errors";

export const loadAppointments = () => {
    return dispatch => {
        fetch('/appointments')
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: "LOAD_APPOINTMENTS", payload: data }
                dispatch(action)
            }
        })
    }
};

export const addAppointment = (app) => {
    return dispatch => {
        fetch('/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(app)
        })
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: 'ADD_APPOINTMENT', payload: data}
                dispatch(action)
                dispatch(clearErrors())
            } else {
                dispatch(setErrors(data.errors))
            }
        })
    }
};

export const editAppointment = (id, formData, navigate) => {
    return dispatch => {
        fetch(`/appointments/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: 'EDIT_APPOINTMENT', payload: data}
                dispatch(action)
                navigate('/appointments')
            } else {
                dispatch(setErrors(data.errors))
            }
        })
    }
}

export const deleteAppointment = (id) => {
    return dispatch => {
        fetch(`/appointments/${id}`, {
            method: 'DELETE',
            headers: {
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: "DELETE_APPOINTMENT", payload: id }
                dispatch(action)
                dispatch(clearErrors())
            } else {
                dispatch(setErrors(data.errors))
            }
        })
    }
};

