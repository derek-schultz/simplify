export const PLAY_TRACK = 'PLAY_TRACK';

export function playTrack(track) {
    return {
        type: PLAY_TRACK,
        track
    };
}