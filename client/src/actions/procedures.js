import { clearErrors, setErrors } from "./errors";

export const loadProcedures = () => {
    return dispatch => {
        fetch('/procedures')
        .then(res => res.json())
        .then(data => {
            const action = { type: "LOAD_PROCEDURES", payload: data}
            dispatch(action)
        })
    }
};

export const addProcedure = (procedure) => {
    return dispatch => {
        fetch('/procedures', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(procedure)
        })
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: 'ADD_PROCEDURE', payload: data}
                dispatch(action)
                dispatch(clearErrors())
            } else {
                dispatch(setErrors(data.errors))
            }
        })
    }
};

export const deleteProcedure = (id) => {
    return dispatch => {
        fetch(`/procedures/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: 'DELETE_PROCEDURE', payload: id}
                dispatch(action)
                dispatch(clearErrors())
            } else {
                dispatch(setErrors(data.errors))
            }
        })
    }
}

