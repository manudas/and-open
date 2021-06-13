import {
    USERS_FETCHED,
} from '../action-creators';

const filterUsers = (users = [], filters) => {
    return users.filter(() => true);
}

export const fetchUsersReducer = (state = {},
    {
        type,
        payload,
}) => {
    switch (type) {
        case USERS_FETCHED().type:
            return {
                ...state,
                all: payload,
                filtered: filterUsers(payload, state.filters),
            }
        default:
            return state;
    }
}
