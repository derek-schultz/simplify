import React from 'react';
import CreatePlaylist from './CreatePlaylist';
import { getPlaylists } from './API';

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
        if (this.props.user && this.props.user.id) {
            getPlaylists(this.props.user.id).then(result => {
                console.log("result!", result);
                this.setState({playlists: result.items});
            });
        }
    }

    createPlaylist(name) {        
        this.setState((state, props) => {
            return {
                playlists: [
                    ...state.playlists,
                    {id: Math.random.toString(36), name}
                ]
            }
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.playlists.map(playlist => {
                        return <li key={playlist.id}>{playlist.name}</li>;
                    })}
                </ul>
                <CreatePlaylist onCreate={name => this.createPlaylist(name)} />
            </div>
        );
    }
}