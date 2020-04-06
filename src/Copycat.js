import React from 'react';

export default class Copycat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            val: ""
        };
    }

    handleChange(event) {
        this.setState({
            val: event.target.value
        })
    }

    clear() {
        this.setState({val: ""});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.val} onChange={e => this.handleChange(e)} />
                <div>{this.state.val}</div>
                <button onClick={() => this.clear()}>Clear</button>
            </div>
        );
    }
}
