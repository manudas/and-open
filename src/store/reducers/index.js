import { combineReducers } from 'redux';

import {
    fetchUsersReducer,
} from './users';

export default combineReducers({
    users: fetchUsersReducer,
});