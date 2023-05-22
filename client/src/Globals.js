export const updateResourceCollection = (object, key, collection) => {
    return {...object, [key]: collection};
};

export const addResource = (collection, addedItem) => {
    return [...collection, addedItem]
};