import React from 'react';

export default class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        });
    }

    sendName() {
        this.props.onCreate(this.state.name, 0);
        this.setState({name: ""});
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={e => this.updateName(e)}
                />
                <button onClick={() => this.sendName()}>Add</button>
            </div>
        );
    }
}
