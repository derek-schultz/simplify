import React from 'react';
import NewTodo from "./NewTodo";

export default class Todos extends React.Component {
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
