import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components"
const TodoList = ({
  state,
  deleteHandler,
  toggleHandler,
  editHandler,
  saveHandler,
  dispatch,
  addTask,
}) => {
  return (
    <UL>
      {state.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          deleteHandler={deleteHandler}
          toggleHandler={toggleHandler}
          editHandler={editHandler}
          saveHandler={saveHandler}
          dispatch={dispatch}
          addTask={addTask}
        />
      ))}
    </UL>
  );
};

export default TodoList;

const UL = styled.ul`
  list-style:none;

`