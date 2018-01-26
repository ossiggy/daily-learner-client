import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {articlesReducer} from './articles';
import {singleArticleReducer} from './singleArticle';
import authReducer from './auth';
import {userReducer} from './users';
import headerReducer from './header';

export default combineReducers({
  articles: articlesReducer,
  singleArticle: singleArticleReducer,
  auth: authReducer,
  user: userReducer,
  form: formReducer,
  menu: headerReducer
});