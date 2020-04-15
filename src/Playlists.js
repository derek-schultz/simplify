import React from 'react';
import CreatePlaylist from './CreatePlaylist';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadPlaylists, createPlaylist } from './redux/actions/spotify';

class Playlists extends React.Component {
    componentDidMount() {
        this.props.loadPlaylists();
    }

    render() {
        return (
            <div className="Playlists">
                <CreatePlaylist onCreate={name => this.props.createPlaylist(name)} />
                <Table variant="dark">
                    <tbody>
                        {this.props.playlists.map(playlist => {
                            return <tr key={playlist.id}>
                                <td>
                                    <Link to={`/library/${playlist.id}`}>{playlist.name}</Link>
                                </td>
                            </tr>;
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    playlists: state.spotify.playlists,
});

const mapDispatchToProps = (dispatch) => ({
    loadPlaylists: () => dispatch(loadPlaylists()),
    createPlaylist: (name) => dispatch(createPlaylist(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);