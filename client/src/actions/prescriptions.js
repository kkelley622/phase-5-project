export const loadPrescriptions = () => {
    return dispatch => {
        fetch('/prescriptions')
        .then(res => res.json())
        .then(data => {
            const action = { type: "LOAD_PRESCRIPTIONS", payload: data }
            dispatch(action)
        })
    }
};

export const deletePrescription = (id) => {
    return dispatch => {
        fetch(`/prescriptions/${id}`, {
            method: 'DELETE',
            headers:{
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            const action = { type: 'DELETE_PRESCRIPTION', payload: id}
            dispatch(action)
        })
    }
}