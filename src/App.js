import { useReducer } from "react";
import "./App.css";
import Todoform from "./componemts/TodoForm";
import TodoList from "./componemts/TodoList";

const reducers = (state, action) => {
  if (action.type === "ADD_TASK") {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  }
  if (action.type === "VALUE") {
    return {
      ...state,
      initialValue: action.payload,
    };
  }
  if (action.type === "VALUE_EDIT") {
    const editText = state.todos.map((tood) => {
      if (tood.id === action.payload.id) {
        tood.title = action.payload.value;
      }
      return tood;
    });
    console.log(editText);
    return {
      ...state,
      todos: editText,
    };
  }
  if (action.type === "SAVE") {
    return {
      ...state,
      todos: [
        ...state.todos.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              title: action.payload.value,
            };
          }
          return item;
        }),
      ],
    };
  }
  if (action.type === "DELETE") {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    };
  }

  if (action.type === "COMPLETE") {
    return {
      ...state,
      todos: [
        ...state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      ],
    };
  }
  if (action.type === "EDIT") {
    return {
      ...state,
      todos: [
        ...state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, edit: !todo.edit };
          }
          return todo;
        }),
      ],
    };
  }
};

const initialState = {
  todos: [],
  initialValue: null,
};

function App() {
  const [state, dispatch] = useReducer(reducers, initialState);
  console.log(state);

  // console.log(secondOb);
  const deleteHandler = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const toggleHandler = (id) => {
    dispatch({ type: "COMPLETE", payload: id });
  };

  const editHandler = (id) => {
    dispatch({ type: "EDIT", payload: id });
  };

  const saveHandler = (data) => {
    dispatch({ type: "SAVE", payload: data });
    editHandler(data.id);
  };

  return (
    <div className="App">
      <Todoform dispatch={dispatch} state={state} />
      <TodoList
        dispatch={dispatch}
        saveHandler={saveHandler}
        state={state}
        deleteHandler={deleteHandler}
        toggleHandler={toggleHandler}
        editHandler={editHandler}
      />
    </div>
  );
}

export default App;
