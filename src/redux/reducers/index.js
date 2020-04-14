import { combineReducers } from 'redux';
import playingReducer from './playing';
import todosReducer from './todos';

export default combineReducers({
    playing: playingReducer,
    todos: todosReducer,
})