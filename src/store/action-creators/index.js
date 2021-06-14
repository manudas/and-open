export const USERS_FETCHED = (users) => {
    return {
        type: 'USERS_FETCHED',
        payload: users
    }
};

export const SET_FILTER = (filter, value) => {
    return {
        type: 'SET_FILTER',
        filterType: filter,
        filterValue: value
    }
};
