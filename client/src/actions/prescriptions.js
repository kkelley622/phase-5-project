export const loadPrescriptions = () => {
    return dispatch => {
        fetch("/prescriptions")
        .then(res => res.json())
        .then(data => {
            const action = { type: "LOAD_PRESCRIPTIONS", payload: data }
            dispatch(action)
        })
    }
}