import { combineReducers } from 'redux';

import {
    fetchUsersReducer,
} from './users';

/**
 * The root reducer of the app
 */
export default combineReducers({
    users: fetchUsersReducer,
});