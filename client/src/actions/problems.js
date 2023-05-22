import { clearErrors, setErrors } from "./errors";

export const loadProblems = () => {
    return dispatch => {
        fetch('/problems')
        .then(res => res.json())
        .then(data => {
            const action = { type: "LOAD_PROBLEMS", payload: data}
            dispatch(action)
        })
    }
};

export const deleteProblem = (id) => {
    return dispatch => {
        fetch(`problems/${id}`, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            const action = { type: 'DELETE_PROBLEM', payload: id}
            dispatch(action)
        })
    }
};

export const addProblem = (problem) => {
    return dispatch => {
        fetch('/problems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(problem)
        })
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: 'ADD_PROBLEM', payload: data }
                dispatch(action)
                dispatch(clearErrors())
            } else {
                dispatch(setErrors(data.errors))
            }
        })
    }
};