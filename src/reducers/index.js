import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {articlesReducer} from './article';
import authReducer from './auth';
import {userReducer} from './users';

export default combineReducers({
  articles: articlesReducer,
  auth: authReducer,
  user: userReducer,
  form: formReducer
})