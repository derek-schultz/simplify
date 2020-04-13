import history from './history';
import queryString from 'query-string';

const SPOTIFY_BASE = "https://api.spotify.com/v1";

export function apiRequest(url, options, body) {
    const accessToken = localStorage.getItem('accessToken');
    const finalOptions = {
        ...options,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        }
    };
    if (body !== undefined) {
        finalOptions.body = JSON.stringify(body);
    }
    return fetch(`${SPOTIFY_BASE}${url}`, finalOptions)
    .then(response => {
        if (response.status > 400) {
            response.text().then(err => console.error(err));
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

export function getPlaylist(userId, playlistId) {
    return apiRequest(`/users/${userId}/playlists/${playlistId}`);
}

export function getPlaylists(userId) {
    return apiRequest(`/users/${userId}/playlists`);
}

export function createPlaylist(userId, name) {
    return apiRequest(
        `/users/${userId}/playlists`,
        {method: 'POST'},
        {
            name,
            public: false,
        }
    );
}

export function search(query) {
    const params = queryString.stringify({
        q: query,
        type: ['track', 'artist'].join(',')
    });
    return apiRequest(`/search?${params}`);
}