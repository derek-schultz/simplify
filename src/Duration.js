import React from 'react';

export default class Duration extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.time.duration !== this.props.time.duration) {
            return true;
        }
        return false;
    }

    render() {
        console.log("We are rendering", this.props.time);
        return this.props.time.duration.toString().padStart(2, "0");
    }
}