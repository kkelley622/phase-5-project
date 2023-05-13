export const loadAppointments = () => {
    return dispatch => {
        fetch('/appointments')
        .then(res => res.json())
        .then(data => {
            const action = { type: "LOAD_APPOINTMENTS", payload: data }
            dispatch(action)
        })
    }
};