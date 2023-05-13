export const loadMeds = () => {
    return dispatch => {
        fetch('/medications')
        .then(res => res.json())
        .then(data => {
            const action = { type: "LOAD_MEDS", payload: data }
            dispatch(action)
        })
    }
};