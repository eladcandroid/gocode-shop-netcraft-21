import "./Todo.css";

function Todo({ title, completed, removeTodo, id }) {
  return (
    <div
      className="Todo"
      style={{ textDecoration: completed && "line-through" }}
    >
      <span style={{ cursor: "pointer" }} onClick={() => removeTodo(id)}>
        🗑{" "}
      </span>
      {title}
    </div>
  );
}

export default Todo;
