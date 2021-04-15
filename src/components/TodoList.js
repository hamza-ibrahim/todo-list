import React from "react";
// Import components
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              todo={todo}
              text={todo.text}
              key={todo.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
