import React, { Component } from "react";
import { connect } from "react-redux";

class Todos extends Component {
  render() {
    const todos = this.props.todos.map(todo => <li> {todo.name} </li>);
    return <ul>{todos}</ul>;
  }
}

const mapStateToProps = state => {
  return { todos: state };
};

export default connect(mapStateToProps)(Todos);
