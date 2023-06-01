export const loadProviders = () => {
    return dispatch => {
        fetch('/providers')
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                const action = { type: "LOAD_PROVIDERS", payload: data}
                dispatch(action)
            }
        })
    }
}