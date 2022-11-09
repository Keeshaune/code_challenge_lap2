import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { searchUser } from './reducers';

const store = createStore(searchUser, composeWithDevTools(applyMiddleware(thunk)));

export default store;
