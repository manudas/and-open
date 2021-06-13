import {
    createStore,
} from 'redux';
import {
    composeWithDevTools,
} from 'redux-devtools-extension';

import rootReducer from './reducers';

// no need of Thunk middleware as is not really asynchronous data fetching
export default createStore(rootReducer, composeWithDevTools());
