import React from "react";
import "./App.css";
import Todo from "./Components/Todo/Todo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 0, title: "Abduraim", isCompleted: false },
    { id: 1, title: "Quvonch", isCompleted: true },
    { id: 2, title: "Ustoz", isCompleted: true },
  ]);

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <>
      <form className="form">
        <input
          className="input--text"
          onKeyUp={(evt) => {
            if (evt.code === "Enter") {
              const newTodo = {
                id: todos[todos.length - 1]?.id + 1 || 0,
                title: evt.target.value,
                isCompleted: false,
              };
              setTodos([...todos, newTodo]);
            }
          }}
          type="text"
          placeholder="Yoz..."
        />
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              handleDelete={() => handleDelete(todo.id)}
            >
              {todo.title}
              <input type="checkbox" className="checkbox" />
            </Todo>
          ))}
        </ul>
      </form>
    </>
  );
}

export default App;
