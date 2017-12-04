import {combineReducers} from 'redux';

import {articlesReducer} from './article';
import authReducer from './auth';
import {userReducer} from './users';

export default combineReducers({
  articles: articlesReducer,
  auth: authReducer,
  user: userReducer
})