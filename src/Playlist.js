import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import { playTrack } from './redux/actions/playing';
import { loadPlaylist } from './redux/actions/spotify';
import { useDispatch, useSelector } from 'react-redux';

export default function Playlist(props) {
    const { playlistId } = useParams();
    const playlist = useSelector((state) => state.spotify.cachedPlaylists[playlistId]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (playlistId) {
            dispatch(loadPlaylist(playlistId));
        }
    }, [playlistId]);

    function pad(time) {
        return time.toString().padStart(2, "0");
    }

    function onClickTrack(track) {
        dispatch(playTrack(track));
    }

    function renderTracks() {
        return (
            <Table variant="dark">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Length</th>
                    </tr>
                </thead>
                <tbody>
                    {playlist.tracks.items.map(data => {
                        const track = data.track;
                        const duration = moment.duration(track.duration_ms);
                        return <tr key={track.id} onClick={() => onClickTrack(track)}>
                            <td>{track.name}</td>
                            <td>{track.artists.map(artist => artist.name).join(', ')}</td>
                            <td>{track.album.name}</td>
                            <td>{pad(duration.minutes())}:{pad(duration.seconds())}</td>
                        </tr>;
                    })}
                </tbody>
            </Table>
        );
    }

    return (
        <div className="Playlist">
            {playlist ? renderTracks() : null}
        </div>
    );
}
