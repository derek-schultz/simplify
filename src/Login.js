import React from 'react';
import queryString from 'query-string';
import Button from 'react-bootstrap/Button';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log("OK WE MAKIN It");
    }
    buildURL() {
        const authURL = "https://accounts.spotify.com/authorize";
        const params = {
          client_id: "59ef645369184c448cddca7422aaeac3",
          response_type: "token",
          redirect_uri: "http://localhost:3000/authorization"
        }
        return `${authURL}?${queryString.stringify(params)}`;
    }
    render() {
        return <Button href={this.buildURL()}>Log in</Button>
    }
}