import React, { useState, useEffect } from "react";

function Input() {
  const [todo, setTodo] = useState("");
  const changeTodo = (e) => {
    setTodo(e.target.value);
  };
  const [id, setId] = useState(0);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setId(id + 1);
      setTodo([...todo, { id: id, text: todo, completed: false }]);
      setTodo("");
    }
  };

  return (
    <div>
      <section
        mv-app="todoapp"
        class="todoapp"
        mv-bar="none"
        mv-storage="local"
        mv-autosave="3"
        mv-mode="edit"
        mv-init="#data"
      >
        <header className="header">
          <h1>todos</h1>
          <form>
            <input
              className="new-todo"
              property="newTodo"
              placeholder="What needs to be done?"
              value={todo}
              onKeyDown={handleKeyDown}
              onChange={changeTodo}
              autoFocus
            />
          </form>
        </header>
      </section>
    </div>
  );
}
export default Input;
