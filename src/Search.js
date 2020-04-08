import React from 'react';
import { search } from './API';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            results: {},
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value});
    }

    search() {
        search(this.state.search).then(results => {
            this.setState({results});
        });
    }

    renderArtists() {
        return this.state.results.artists.items.map(artist => {
            return <li key={artist.id}>{artist.name}</li>;
        })
    }

    renderTracks() {
        return this.state.results.tracks.items.map(track => {
            return <li key={track.id}>{track.name}</li>;
        })
    }


    render() {
        return (
            <div className="search">
                <input type="text" placeholder="Search..." value={this.state.search} onChange={e => this.updateSearch(e)} />
                <button onClick={() => this.search()}>Go</button>
                <h2>Artists</h2>
                <ul>
                    {this.state.results.artists ? this.renderArtists() : null}
                </ul>
                <h2>Tracks</h2>
                <ul>
                    {this.state.results.tracks ? this.renderTracks() : null}
                </ul>
            </div>
        );
    }
}