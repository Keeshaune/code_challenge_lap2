import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { SearchUser } from './reducers';

const store = createStore(SearchUser, composeWithDevTools(applyMiddleware(thunk)));

export default store;
