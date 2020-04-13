import React from 'react';
import Navbar from './Navbar';
import Library from './Library';
import Timer from './Timer';
import Search from './Search';
import Player from './Player';
import Todos from './Todos';

import {
  Switch,
  Route
} from "react-router-dom";

import { getUser } from './API';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    this.updatePlaying = this.updatePlaying.bind(this);
  }

  componentDidMount() {
    getUser().then(result => this.setState({user: result}));
  }

  updatePlaying(track) {
    this.setState({
      playing: track
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} />
        <Player />
        <Switch>
          <Route path="/library">
            <Library user={this.state.user} onPlayTrack={this.updatePlaying} />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
