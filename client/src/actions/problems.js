export const loadProblems = () => {
    return dispatch => {
        fetch('/problems')
        .then(res => res.json())
        .then(data => {
            const action = { type: "LOAD_PROBLEMS", payload: data}
            dispatch(action)
        })
    }
}