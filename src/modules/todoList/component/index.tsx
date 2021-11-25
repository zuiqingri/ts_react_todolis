import React from "react";

type TodoType = {
  id: number;
  text: string;
  done: boolean;
};

type TodoListType = TodoType[];

const TodoList = () => {
  return (
    <div>
      <h2>Todo List</h2>
    </div>
  );
};

export default TodoList;
