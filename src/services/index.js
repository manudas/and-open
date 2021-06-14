import {
    USERS_FETCHED,
} from '../store/action-creators';

import userDataObj from '../__mockedData__/users';

/**
 * We'll include this structure so as to
 * be able to mock this functions on the
 * corresponding tests. Otherwise it'll
 * have a different reference, as one
 * time is exported and another used
 * inside this same file, and the
 * mockImplementation won't work as expected
 */
export const userData = {
    get: () => userDataObj,
};

/**
 * Invokes an action creator with the
 * result of an API call, which in this
 * code challenge has been mocked
 *
 * @returns an USERS_FETCHED action which
 * payload will be an array of users
 * fetched from an API
 */
export const fetchUsers = () => {
    return USERS_FETCHED(userData.get());
}
