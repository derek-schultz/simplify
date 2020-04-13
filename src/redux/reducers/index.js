import { PLAY_TRACK } from '../actions/playing';

const initialState = {
    playing: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case PLAY_TRACK:
            return {
                ...state,
                playing: action.track,
            };
        default:
            return state;
    }
}