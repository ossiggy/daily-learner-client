import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import {setAuthToken} from './actions/';
import reducer from './reducers/';

const store = createStore(reducer, applyMiddleware(thunk));

const authToken = loadAuthtoken();
if(authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
}

export default store;