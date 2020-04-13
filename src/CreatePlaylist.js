import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

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
            <InputGroup>
                <FormControl
                    placeholder="New playlist name"
                    type="text"
                    value={this.state.name}
                    onChange={e => this.updateName(e)}
                />
                <InputGroup.Append>
                    <Button onClick={() => this.sendName()}>Add</Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
}
