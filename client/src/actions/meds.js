export const loadMeds = () => {
    return dispatch => {
        fetch('/medications')
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: "LOAD_MEDS", payload: data }
                dispatch(action)
            }
        })
    }
};