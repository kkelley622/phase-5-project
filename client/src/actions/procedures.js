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

