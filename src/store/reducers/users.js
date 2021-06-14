import {
    USERS_FETCHED,
    SET_FILTER,
} from '../action-creators';

/**
 * Auxiliary function to get the fetched users
 * from the API filtered by the user selections
 *
 * @param {Array} users The non-filtered user list from the API
 * @param {Array} filters A list of filters the user of this
 * APP has applied
 *
 * @returns An array containing users that have been filtered
 * following the filter critearia passed as a parameter
 */
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

/**
 * Used to spy the filterUsers
 * method from the unit tests
 */
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
