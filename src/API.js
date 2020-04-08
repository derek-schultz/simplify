import history from './history';

const SPOTIFY_BASE = "https://api.spotify.com/v1";

export function apiRequest(url, options) {
    const accessToken = localStorage.getItem('accessToken');
    return fetch(`${SPOTIFY_BASE}${url}`, {
        ...options,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => {
        if (response.status > 400) {
            history.push('/login');
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