import React from 'react';
import NewTodo from "./NewTodo";

import { addTodo } from './redux/actions/todos';

import { connect } from 'react-redux';

class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    addTodo(newTodo) {
        this.setState((state, props) => ({
            todos: [
                ...state.todos,
                newTodo,
            ]
        }));
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.todos.map(todo => <li>{todo}</li>)}
                </ul>
                <NewTodo onCreation={(newTodo) => this.addTodo(newTodo)} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);