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
                <Playlists />
                <Switch>
                    <Route path="/library/:playlistId">
                        <Playlist />
                    </Route>
                </Switch>
            </div>
        );
    }
}