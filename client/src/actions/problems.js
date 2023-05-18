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
}