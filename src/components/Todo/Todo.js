import { useContext, useEffect } from "react";
import ThemeContext from "../../ThemeContext";
import "./Todo.css";

function Todo({ title, completed, removeTodo, id }) {
  const { setDarkMode, darkMode } = useContext(ThemeContext);
  useEffect(() => {
    console.log("FIRST TODO RENDER");

    return () => console.log("TODO DIED");
  }, []);

  return (
    <div
      className="Todo"
      style={{
        textDecoration: completed && "line-through",
        color: darkMode && "white",
      }}
    >
      <span style={{ cursor: "pointer" }} onClick={() => removeTodo(id)}>
        🗑
      </span>
      <span onClick={() => setDarkMode(!darkMode)}>{title}</span>
    </div>
  );
}

export default Todo;
