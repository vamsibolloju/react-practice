import React, { Component } from "react";
import { connect } from "react-redux";

class Todos extends Component {
  addTodo() {
    this.props.addTodo({ name: Date.now().toString() });
  }

  render() {
    const todos = this.props.todos.map(todo => <li> {todo && todo.name} </li>);
    return (
      <div>
        <button onClick={this.addTodo.bind(this)}> New Todo </button>
        <ul>{todos}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch({ type: "ADD_TODO", todo })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
