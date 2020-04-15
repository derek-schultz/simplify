import * as api from '../../API';

export const LOAD_USER = 'LOAD_USER';
export const LOAD_PLAYLISTS = 'LOAD_PLAYLISTS';
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';

export function loadUserIfNeeded() {
    return (dispatch, getState) => {
        const state = getState();
        if (!state.spotify.user.id) {
            return dispatch(loadUser());
        }
        return Promise.resolve();
    };
}

export function loadUser() {
    return dispatch => {
        return api.getUser().then(user => {
            console.log("dispatching load user", user);
            dispatch({
                type: LOAD_USER,
                user,
            });
        });
    };
}

export function loadPlaylists() {
    return (dispatch, getState) => {
        dispatch(loadUserIfNeeded())
        .then(() => {
            const state = getState();
            return api.getPlaylists(state.spotify.user.id);
        })
        .then(playlists => {
            dispatch({
                type: LOAD_PLAYLISTS,
                playlists
            })
        })
    };
}

export function createPlaylist(name) {
    return (dispatch, getState) => {
        const state = getState();
        api.createPlaylist(state.spotify.user.id, name)
        .then(playlist => {
            dispatch({
                type: CREATE_PLAYLIST,
                playlist
            });
        })
    };
}