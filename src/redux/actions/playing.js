export const PLAY_TRACK = 'PLAY_TRACK';
export const PAUSE_TRACK = 'PAUSE_TRACK';
export const CLEAR_TRACK = 'CLEAR_TRACK';

export function playTrack(track) {
    return {
        type: PLAY_TRACK,
        track
    };
}

export function pauseTrack() {
    return {};
}