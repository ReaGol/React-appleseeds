import { useReducer, useState } from "react";
import "./App.css";
import Todo from "./Todo";

// const LOCAL_STORAGE_KEY = "todoApp.todosName";

const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return 
    
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
   const [name, setName] = useState("");


  function handleAddTodo(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('')
  }

  console.log(todos)
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
      {todos.map(todo => {
        <Todo key={todo.id} todo={todo}/>
      })}
    </div>
  );
}

export default App;
