import React from 'react';
import Navbar from './Navbar';
import Library from './Library';
import Timer from './Timer';
import Search from './Search';
import PlayerBar from './PlayerBar';
import Todos from './Todos';
import Hook from './Hook';

import {
  Switch,
  Route
} from "react-router-dom";

import { connect } from 'react-redux';

import { getUser } from './API';
import { loadUser } from './redux/actions/spotify';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.props.loadUser();
    getUser().then(result => this.setState({user: result}));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
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
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/hook">
            <Hook />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser())
});

export default connect(null, mapDispatchToProps)(App);
