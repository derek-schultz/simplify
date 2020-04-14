import { PLAY_TRACK } from '../actions/playing';

const initialState = null;

export default function(state = initialState, action) {
    switch(action.type) {
        case PLAY_TRACK:
            return action.track;
        default:
            return state;
    }
}