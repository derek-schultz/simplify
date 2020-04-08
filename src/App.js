import React from 'react';
import Navbar from './Navbar';
import Library from './Library';
import Timer from './Timer';
import Login from './Login';

import {
  Router,
  Switch,
  Route
} from "react-router-dom";

import Authorization from './Authorization';
import { getUser } from './API';
import history from './history';

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
            <Route path="/library">
              <Library user={this.state.user} />
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
