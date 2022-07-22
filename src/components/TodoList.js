import React from "react";

const TodoList = (props) => {
  return (
    <div className="mt-5">
      <div className="list-group">
        {props.todos.map((todo) => (
          <div key={todo.id} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{todo.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
