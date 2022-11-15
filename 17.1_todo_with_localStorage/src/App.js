import { useEffect, useState } from "react";
import Todo from "./Todo";
import "./App.css";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    setTodos((prev) => prev.concat(inputValue));
    setInputValue("");
  }

  function TodoList({ todos }) {
    return todos.map((todo) => {
      return <Todo key={Date.now()} todo={todo} />;
    });
  }

  function handleDeleteTodo(index) {
    setTodos((prevState) =>
      prevState.filter((todo, mapIndex) => {
        return mapIndex !== index;
      })
    );
  }
  return (
    <div>
      <TodoList todos={todos} />
      <h1>My Todo-List</h1>
      <div className='container'>
        <input
          name='todo'
          onChange={(e) => {
            setInputValue(() => e.target.value);
          }}
          type='text'
          value={inputValue}
        />
        <button onClick={handleAddTodo}>Add</button>
        {todos.map((todo, mapIndex) => (
          <div key={todo.value + mapIndex}>
            <button
              onClick={() => {
                handleDeleteTodo(mapIndex);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
