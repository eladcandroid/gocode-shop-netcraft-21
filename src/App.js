import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos/Todos";

function App() {
  console.log("RENDER");
  let newTodo = "";

  const [todos, setTodos] = useState([
    { id: 80, title: "Wash your dishes", completed: false },
    { id: 100, title: "Do H.W", completed: false },
    { id: 200, title: "Throw the garbage", completed: true },
  ]);

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

  return (
    <div className="App">
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
      />
      <button onClick={handleClick}>Add todo</button>
      <br />
      <br />
      {/* <Counter />
      <Counter /> */}
      <Todos todos={todos} removeTodo={handleRemoveTodo} />
    </div>
  );
}

export default App;
