import Todo from "../Todo/Todo";

function Todos({ todos, removeTodo }) {
  return (
    <div>
      {todos.map(({ id, title, completed }) => (
        <Todo
          key={id}
          id={id}
          title={title}
          completed={completed}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default Todos;
