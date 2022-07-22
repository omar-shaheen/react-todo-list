import React, { useState } from "react";

const TodoForm = (props) => {
  const [inputVal, setInputVal] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    props.addTodoListHandler(inputVal);
    setInputVal("");
  };

  const enterdTodo = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter todo
          </label>
          <input
            type="text"
            className="form-control"
            value={inputVal}
            onChange={enterdTodo}
          />
          <div
            id="emailHelp"
            className="form-text"
            // style={{ color: !props.isValid ? "" : "red" }}
          >
            Please enter todo list first
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
