import {
    USERS_FETCHED,
    SET_FILTER,
} from '../action-creators';

const filterUsers = (users = [], filters = {}) => {
    return users.filter((user) => {
        return Object.entries(filters).every(([filterKey, filterValue]) => {
            if (filterValue !== null) { // not empty
                switch (filterKey) {
                    case 'spend':
                        return user[filterKey] >= filterValue;
                    default:
                        return user[filterKey] === filterValue;
                }
            } else return true;
        });
    });
}

export const fetchUsersReducer = (state = {},
    {
        filterType = null,
        filterValue = null,
        type,
        payload = null,
}) => {
    switch (type) {
        case USERS_FETCHED().type:
            return {
                ...state,
                all: payload,
                filtered: filterUsers(payload, state.filters),
            };
        case SET_FILTER().type:
            const newFilters = { ...state.filters, [filterType]: filterValue};
            return {
                ...state,
                filters: newFilters,
                filtered: filterUsers(state.all, newFilters),
            };
        default:
            return state;
    }
}
