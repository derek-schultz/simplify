import React from 'react';
import Navbar from './Navbar';
import Playlists from './Playlists';
import Timer from './Timer';
import Authorization from './Authorization';
import Login from './Login';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';

import queryString from 'query-string';

import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { apiRequest } from './API';
import history from './history';
import { getUser } from './API';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        user: null
    }
  }

  componentDidMount() {
    getUser().then(result => this.setState({user: result}));
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navbar user={this.state.user} />
          <Switch>
            <Route path="/authorization">
              <Authorization />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/playlists">
              <Playlists user={this.state.user} />
            </Route>
            <Route path="/timer">
              <Timer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
