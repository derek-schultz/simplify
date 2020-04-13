import playing from './playing';
import todos from './todos';
import { combineReducers } from 'redux';
  
export default combineReducers({
    playing,
    todos
})