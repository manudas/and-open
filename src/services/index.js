import {
    USERS_FETCHED,
} from '../store/action-creators';

import userData from '../__mockedData__/users';

export const fetchUsers = () => {
    return USERS_FETCHED(userData);
}