import React from 'react';
import { getPlaylist } from './API';
import { Table } from 'react-bootstrap';
import moment from 'moment';

export default class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: {}
        }
    }

    componentDidMount() {
        this.updatePlaylist();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.user !== prevProps.user ||
                this.props.match.params.playlistId != prevProps.match.params.playlistId) {
            this.updatePlaylist();
        }
    }

    updatePlaylist() {
        if (this.props.user && this.props.user.id) {
            getPlaylist(this.props.user.id, this.props.match.params.playlistId).then(result => {
                this.setState({playlist: result});
            });
        }
    }

    pad(time) {
        return time.toString().padStart(2, "0");
    }

    renderTracks() {
        console.log(this.state.playlist.tracks);
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
                    {this.state.playlist.tracks.items.map(data => {
                        const track = data.track;
                        const duration = moment.duration(track.duration_ms);
                        return <tr key={track.id}>
                            <td>{track.name}</td>
                            <td>{track.artists.map(artist => artist.name).join(", ")}</td>
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
                {this.state.playlist.tracks ? this.renderTracks() : null}
            </div>
        );
    }
}