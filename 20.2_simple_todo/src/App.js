import './App.css';
import React, { Component } from "react";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TodoList/>
      </div>
    )
  }
}

export default App


// Let's create a very basic todo app using useState.
// We have the following static data of array of objects:

// Save it to your state.
// The user can press an icon to change the todo as
// completed.
// The user can press an icon to change the todo as not
// completed.
// If the todo is completed cross the name out and change the
// icon to a “check”.
// If the todo is not completed change the icon to an “x”.
// Use entities to change the icons to a “check” or an “x”