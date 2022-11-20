import React, { Component } from "react";
import Todo from "./Todo";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
      ],
    };
  }

  completedTodo(todo) {
    const array = this.state.todos
    this.setState({
      todos:array.map((item) => {
        return item.name === todo.name
          ? { ...item, completed: !item.completed }
          : item;
      }),
    });
  };

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          name={todo.name}
          key={todo.name}
          completed={todo.completed}
          handleClick={this.completedTodo.bind(this)}
        />
      );
    });
    return (
      <div>
        <h1>Todo List</h1>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
