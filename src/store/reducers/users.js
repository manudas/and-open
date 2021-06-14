import {
    USERS_FETCHED,
    SET_FILTER,
} from '../action-creators';

const filterUsers = (users = [], filters = {}) => {
    return users.filter((user) => {
        return Object.entries(filters).every(([filterKey, filterValue]) => {
            if (filterValue !== null && filterValue !== '') { // not empty
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

export const functions = {
    filterUsers
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
            const keyedUsers = payload.map((user) => ({...user, key: user.id}));
            return {
                ...state,
                all: keyedUsers,
                filtered: functions.filterUsers(keyedUsers, state.filters),
            };
        case SET_FILTER().type:
            const newFilters = { ...state.filters, [filterType]: filterValue};
            return {
                ...state,
                filters: newFilters,
                filtered: functions.filterUsers(state.all, newFilters),
            };
        default:
            return state;
    }
}
