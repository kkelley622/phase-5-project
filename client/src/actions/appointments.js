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

export const deleteAppointment = (id) => {
    return dispatch => {
        fetch(`/appointments/${id}`, {
            method: 'DELETE',
            headers: {
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            const action = { type: "DELETE_APPOINTMENT", payload: id }
            dispatch(action)
        })
    }
}