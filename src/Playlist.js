import React from 'react';
import { getPlaylist } from './API';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import { playTrack } from './redux/actions/playing';
import { loadPlaylist } from './redux/actions/spotify';
import { connect } from 'react-redux';

class Playlist extends React.Component {    
    componentDidMount() {
        this.props.loadPlaylist(this.props.match.params.playlistId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.playlistId !== prevProps.match.params.playlistId) {
            this.props.loadPlaylist(this.props.match.params.playlistId);
        }
    }

    pad(time) {
        return time.toString().padStart(2, "0");
    }

    renderTracks() {
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
                    {this.props.playlist.tracks.items.map(data => {
                        const track = data.track;
                        const duration = moment.duration(track.duration_ms);
                        return <tr key={track.id} onClick={() => this.props.onPlayTrack(track)}>
                            <td>{track.name}</td>
                            <td>{track.artists.map(artist => artist.name).join(', ')}</td>
                            <td>{track.album.name}</td>
                            <td>{this.pad(duration.minutes())}:{this.pad(duration.seconds())}</td>
                        </tr>;
                    })}
                </tbody>
            </Table>
        );
    }

    render() {
        return (
            <div className="Playlist">
                {this.props.playlist ? this.renderTracks() : null}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        playlist: state.spotify.cachedPlaylists[ownProps.match.params.playlistId],
    }
};

const mapDispatchToProps = (dispatch) => ({
    onPlayTrack: track => dispatch(playTrack(track)),
    loadPlaylist: playlistId => dispatch(loadPlaylist(playlistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);