import { combineReducers } from 'redux';
import rules from './reducers/rules';
import menu from './reducers/menu';

export default combineReducers({
  rules,
  menu,
});
