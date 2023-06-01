import { clearErrors, setErrors } from './errors'

export const loadPrescriptions = () => {
    return dispatch => {
        fetch('/prescriptions')
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: "LOAD_PRESCRIPTIONS", payload: data }
                dispatch(action)
            }
        })
    }
};

export const addPrescription = (prescription) => {
    return dispatch => {
        fetch('/prescriptions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prescription)
        })
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: 'ADD_PRESCRIPTION', payload: data}
                dispatch(action)
                dispatch(clearErrors())
            } else {
                dispatch(setErrors(data.errors))
            }
        })
    }
}

export const deletePrescription = (id) => {
    return dispatch => {
        fetch(`/prescriptions/${id}`, {
            method: 'DELETE',
            headers:{
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: 'DELETE_PRESCRIPTION', payload: id}
                dispatch(action)
                dispatch(clearErrors())
            } else {
                dispatch(setErrors(data.errors))
            }
        })
    }
}