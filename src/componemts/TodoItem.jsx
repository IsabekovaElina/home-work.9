import React, { useState } from "react";
import styled from "styled-components";
const TodoItem = ({
  deleteHandler,
  toggleHandler,
  editHandler,
  saveHandler,
  dispatch,
  edit,
  completed,
  id,
  editValue,
  title,
  addTask,
}) => {
  const [value, setValue] = useState(title);
  return (
    <div>
      {edit ? (
        <>
          <div className={completed ? "line" : ""} key={id}>
            <input type="checkbox" onClick={() => toggleHandler(id)} />
            <li>{title}</li>
            <Main>
              <Delete onClick={() => deleteHandler(id)}>DELETE</Delete>
              <EDIT onClick={() => editHandler(id)}>EDIT</EDIT>
            </Main>
          </div>
        </>
      ) : (
        <>
          <INPT>

            <input value={value} onChange={(e) => setValue(e.target.value)} />
          </INPT>

          <SAVE onClick={() => saveHandler({ id, value })}>SAVE</SAVE>
        </>
      )}
    </div>
  );
};

export default TodoItem;

const Main = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  gap: 20px;
  color: rgb(98, 45, 163);
  text-align: center;
  margin-left: 700px;
  box-sizing: border-box;
  border-radius: 30px;
  border-color: gold;
`;

const Delete = styled.div`
  border: 4px solid pink;
  border-radius: 20px;
  width: 120px;
  height: 20px;
  justify-content: center;
  margin-left: 0px;

  background: gold;
`;
const EDIT = styled.div`
  margin-bottom: 40px;

  border: 4px solid pink;
  border-radius: 20px;
  width: 120px;
  height: 20px;
  background: #f318d6;
`;
const INPT = styled.div`
  text-align: center;
  width: 150px;
  height: 25px;
  margin-left: 600px;

  /* justify-content:center; */
  display:flex;
  width: 250px;
  height: 50px;
  background-color: #cdaa1e;
`;
const SAVE = styled.div`
margin-bottom:90px;
  background: chocolate;
  align-items: center;
  margin-left: 700px;
  width: 70px;
  height: 40px;
  margin-bottom: 30px;
  /* text-align:center; */
  border-radius: 30px;
`;
