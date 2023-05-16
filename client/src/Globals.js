export const updateResourceCollection = (object, key, collection) => {
    return {...object, [key]: collection};
}