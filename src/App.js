import { useEffect, useRef, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos/Todos";
import ThemeContext from "./ThemeContext";

function App() {
  let newTodo = "";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // console.log("Use effect");
    document.title = `Todos: ${todos.filter((todo) => !todo.completed).length}`;
  }, [todos]);

  const inputRef = useRef(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
      });
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    newTodo = e.target.value;
  };

  const handleClick = () => {
    setTodos([
      {
        id: todos.length + 1,
        title: newTodo,
        completed: false,
      },
      ...todos,
    ]);
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App" style={{ background: darkMode && "black" }}>
      {/* <Counter /> */}
      <button onClick={() => setDarkMode(true)}>Change to dark mode</button>
      <button
        onClick={() =>
          setTodos(
            todos.map((todo) => {
              return {
                ...todo,
                completed: true,
              };
            })
          )
        }
      >
        Complete all todos
      </button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter your title"
        onChange={handleChange}
        ref={inputRef}
      />
      <button onClick={handleClick}>Add todo</button>
      <br />
      <br />
      {/* <Counter />
      <Counter /> */}
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Todos todos={todos} removeTodo={handleRemoveTodo} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
