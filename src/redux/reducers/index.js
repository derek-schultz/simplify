import { combineReducers } from 'redux';
import playingReducer from './playing';
import todosReducer from './todos';
import timerReducer from './timer';
import spotifyReducer from './spotify';

export default combineReducers({
    playing: playingReducer,
    todos: todosReducer,
    timer: timerReducer,
    spotify: spotifyReducer,
})
