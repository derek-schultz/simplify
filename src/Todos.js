import React from 'react';
import NewTodo from "./NewTodo";
import { connect } from 'react-redux';
import { addTodo } from './redux/actions/todos';

class Todos extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => <li>{todo}</li>)}
                </ul>
                <NewTodo onCreation={(newTodo) => this.props.addTodo(newTodo)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: newTodo => dispatch(addTodo(newTodo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);