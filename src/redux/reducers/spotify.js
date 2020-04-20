import {
    LOAD_USER,
    LOAD_PLAYLISTS,
    LOAD_PLAYLIST,
    CREATE_PLAYLIST
} from '../actions/spotify';

const initialState = {
    user: {},
    playlists: [],
    cachedPlaylists: {},
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOAD_USER:
            return {
                ...state,
                user: action.user,
            };
        case LOAD_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists,
            };
        case LOAD_PLAYLIST:
            return {
                ...state,
                cachedPlaylists: {
                    ...state.cachedPlaylists,
                    [action.playlist.id]: action.playlist,
                }
            };
        case CREATE_PLAYLIST:
            return {
                ...state,
                playlists: [
                    action.playlist,
                    ...state.playlists,
                ]
            };
        default:
            return state;
    }
}