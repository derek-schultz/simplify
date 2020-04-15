import {
    LOAD_USER, LOAD_PLAYLISTS, CREATE_PLAYLIST
} from '../actions/spotify';

const initialState = {
    user: {},
    playlists: [],
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOAD_USER:
            return {
                ...state,
                user: action.user
            };
        case LOAD_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists.items
            };
        case CREATE_PLAYLIST:
            return {
                ...state,
                playlists: [
                    action.playlist,
                    ...state.playlists,
                ]
            }
        default:
            return state;
    }
}