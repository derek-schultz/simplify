import React from 'react';
import Button from 'react-bootstrap/Button';

export default class NewTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoName: ""
        };
    }

    handleChange(event) {
        this.setState({
            todoName: event.target.value
        });
    }

    addTodo() {
        this.props.onCreation(this.state.todoName);
        this.setState({todoName: ""});
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.todoName}
                    onChange={e => this.handleChange(e)}
                />
                <Button onClick={() => this.addTodo()}>Add</Button>
            </div>
        );
    }
}
