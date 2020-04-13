import React from 'react';
import Playlists from './Playlists';
import Playlist from './Playlist';
import {
    Switch,
    Route
} from 'react-router-dom';

export default class Library extends React.Component {
    render() {
        return (
            <div className="Library">
                <Playlists user={this.props.user} />
                <Switch>
                    <Route
                        path="/library/:playlistId"
                        component={(props) => {
                            return <Playlist user={this.props.user} onPlayTrack={this.props.onPlayTrack} {...props} />;
                        }}
                    />
                </Switch>
            </div>
        );
    }
}