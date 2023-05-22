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

const addProcedure = (procedure) => {
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
                const action = { type: 'ADD_PROBLEM', payload: data}
                dispatch(action)
                dispatch(clearErrors())
            } else {
                dispatch(setErrors(data.errors))
            }
        })
    }
};

