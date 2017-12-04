import {combineReducers} from 'redux';

import {articleReducer} from './article';
import authReducer from './auth';
import {userReducer} from './users';

export default combineReducers({
  article: articleReducer,
  auth: authReducer,
  user: userReducer
})