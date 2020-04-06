import history from './history';

export function apiRequest(url, options) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        history.push('/login');
        // return Promise.reject(new Error("No access token"));
    }
    return fetch(url, {
        method: "GET",
        ...options,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            // ...options.headers,
        },
    }).then(response => {
        if (response.status > 400) {
            history.push('/login');
            // return Promise.reject(new Error(response.statusText));
        }
        else {
            return Promise.resolve(response.json());
        }
    });
}

export function getUser() {
    return apiRequest("https://api.spotify.com/v1/me");
}

export function getPlaylists(userId) {
    return apiRequest(`https://api.spotify.com/v1/users/${userId}/playlists`);
}