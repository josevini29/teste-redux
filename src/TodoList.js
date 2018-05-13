import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as todoActions from './actions/todos';

class TodoList extends Component {

    state = {
        newTodoText: '',
    }

    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);
        this.setState({ newTodoText: '' });
    }

    remNewTodo = (idTodo) => {
        this.props.remTodo(idTodo);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo, index) => (
                        <li key={index}>
                            {todo.text} - <button onClick={() => this.remNewTodo(todo.id)}>Remover</button>
                        </li>
                    ))}
                </ul>

                <input
                    type="text"
                    value={this.state.newTodoText}
                    onChange={evt => this.setState({ newTodoText: evt.target.value })}
                />
                <button onClick={this.addNewTodo}>Novo todo</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);