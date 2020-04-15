import React from 'react';

export default class Duration extends React.PureComponent {
    render() {
        return this.props.value.toString().padStart(2, "0");
    }
}