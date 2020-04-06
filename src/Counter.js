import React from 'react';
import Button from 'react-bootstrap/Button';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increment() {
        this.setState((state, props) => ({
            counter: state.counter + 1
        }));        
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.increment()}>Click me!</Button>
                <div>You have clicked {this.state.counter} times.</div>
            </div>
        );
    }
}
