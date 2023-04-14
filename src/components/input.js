import { useState } from "react";

function Input({ todos, setTodos }) {
  const [value, setValue] = useState("");
  const [id, setId] = useState(0);
  const onchange = (e) => {
    setValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setId(id + 1);
      setTodos([...todos, { id: id, text: value, completed: false }]);
      setValue("");
    }
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            type="text"
            onChange={onchange}
            onKeyDown={handleKeyDown}
            value={value}
            autoFocus
          />
        </form>
      </header>
    </div>
  );
}

export default Input;
