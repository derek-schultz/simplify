import React from 'react';
import Navbar from './Navbar';
import Library from './Library';
import Timer from './Timer';
import Search from './Search';
import PlayerBar from './PlayerBar';

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
  }

  componentDidMount() {
    getUser().then(result => this.setState({user: result}));
  }

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} />
        <PlayerBar />
        <Switch>
          <Route path="/library">
            <Library user={this.state.user} />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
