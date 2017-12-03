import {combineReducers} from 'redux';

import {articleReducer} from './article';
import authReducer from './auth';
import protectedDataReducer from './protected-data';
import {userReducer} from './users';

export default combineReducers({
  article: articleReducer,
  auth: authReducer,
  protectedData: protectedDataReducer,
  user: userReducer
})