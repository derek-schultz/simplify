import history from './history';

const SPOTIFY_BASE = "https://api.spotify.com/v1";

export function apiRequest(url, options, data) {
    const accessToken = localStorage.getItem('accessToken');
    const allOptions = {
        ...options,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        }
    };
    if (data !== undefined) {
        allOptions.body = JSON.stringify(data);
    }
    return fetch(`${SPOTIFY_BASE}${url}`, allOptions)
    .then(response => {
        if (response.status > 400) {
            response.text().then(errorText => console.error(errorText));
            if (response.status === 401) {
                history.push('/login');
            }
            return;
        }
        return response.json();
    });
}

export function getUser() {
    return apiRequest('/me');
}

export function getPlaylists(userId) {
    return apiRequest(`/users/${userId}/playlists`);
}

export function getPlaylist(userId, playlistId) {
    return apiRequest(`/users/${userId}/playlists/${playlistId}`);
}

export function createPlaylist(userId, name) {
    return apiRequest(
        `/users/${userId}/playlists`,
        {method: 'POST'},
        {
            name,
            public: false,
        }
    )
}