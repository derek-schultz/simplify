import React from 'react';
import Button from 'react-bootstrap/Button';
import queryString from 'query-string';

export default class Login extends React.Component {
    buildURL() {
        const authURL = "https://accounts.spotify.com/authorize";
        const params = {
          client_id: "59ef645369184c448cddca7422aaeac3",
          response_type: "token",
          redirect_uri: "http://localhost:3000/authorization",
          scope: [
            "playlist-read-private",
            "playlist-modify-private",
            "user-follow-read",
            "user-follow-modify",
          ].join(' '),
          show_dialog: true
        };
        return `${authURL}?${queryString.stringify(params)}`;
    }

    render() {
      return (
        <div className="Login">
          <h2>Simplify</h2>
          <Button href={this.buildURL()}>Log in with Spotify</Button>
        </div>
      );
    }
}