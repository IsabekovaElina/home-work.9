import React from "react";
import styled from "styled-components";

const Todoform = ({ dispatch, state }) => {
  //   const [value, setValue] = useState("");

  const addHendler = (e) => {
    e.preventDefault();
    const newOb = {
      id: Math.random(),
      title: state.initialValue,
      completed: false,
      edit: true,
    };
    dispatch({ type: "ADD_TASK", payload: newOb });
  };

  return (
    <>
      <Title>
        To Do List <br /> For Day{" "}
      </Title>
      <form onSubmit={addHendler}>
        <INPUT
          value={state.initialValue}
          placeholder="Write something new"
          onChange={(e) => dispatch({ type: "VALUE", payload: e.target.value })}
        />
        <Button>ADD</Button>
      </form>
    </>
  );
};

export default Todoform;

const Title = styled.h1`
margin-left:10px;
  text-align: center;
  width: 99%;
  height: 90px;
  background-color: purple;
  border-bottom: 20px;
  color: whitesmoke;
  border: 2px solid black;
`;
const INPUT = styled.input`
margin-right:30px;
  text-align: center;
  margin-left:70px;
  width: 150px;
  height: 35px;
  border-radius: 10px solid pink;
  background: #1bcccc;
  :hover {
    background: gold;
  }
`;
const Button = styled.button`
  width: 60px;
  cursor: pointer;
  background: rgb(247, 150, 192);
  background: radial-gradient(
    circle,
    rgba(247, 150, 192, 1) 0%,
    rgba(118, 174, 241, 1) 100%
  );
  line-height: 42px;
  padding: 0;
  border:green;
`;
