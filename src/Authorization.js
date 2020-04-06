import React from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';

export default class Authorization extends React.Component {
    constructor(props) {
        super(props);
        const hash = window.location.hash && queryString.parse(window.location.hash.substring(1));
        if (hash && hash.access_token) {
          localStorage.setItem('accessToken', hash.access_token);
        }
    }

    render() {
        return <Redirect to='/' />
    }
}