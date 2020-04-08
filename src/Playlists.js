import React from 'react';
import CreatePlaylist from './CreatePlaylist';
import { getPlaylists, createPlaylist } from './API';

export default class Playlists extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlists: []
        };
    }

    componentDidMount() {
        this.updatePlaylists();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user !== this.props.user) {
            this.updatePlaylists();
        }
    }

    updatePlaylists() {
        if (this.props.user) {
            getPlaylists(this.props.user.id)
            .then(result => {
                console.log("Only call this once hopefully");
                this.setState({playlists: result.items})
            });
        }
    }

    createPlaylist(name) {
        createPlaylist(this.props.user.id, name).then(result => {
            this.setState((state, props) => {
                return {
                    playlists: [
                        {
                            id: result.id,
                            name
                        },
                        ...state.playlists,
                    ]
                }
            });
        });
    }

    render() {
        return (
            <div>
                <CreatePlaylist onCreate={name => this.createPlaylist(name)} />
                <ul>
                    {this.state.playlists.map(playlist => {
                        return <li key={playlist.id}>{playlist.name}</li>;
                    })}
                </ul>
            </div>
        );
    }
}