import React from 'react';

export default class Timer extends React.Component {
    static ONE_SECOND = 1000;

    constructor(props) {
        super(props);

        this.state = {
            seconds: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), Timer.ONE_SECOND);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState((state, props) => {
            return {
                seconds: state.seconds + 1
            }
        });
    }

    render() {
        return (
            <div>00:{this.state.seconds.toString().padStart(2, "0")}</div>
        );
    }
}