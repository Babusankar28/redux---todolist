import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";
import { useState } from "react";

function AddTodo() {

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="col-8 d-flex gap-4 mx-auto my-3">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="form-control w-75"
        placeholder="Add New Todos...."
      />
      <button className="btn btn-primary" onClick={addTodoHandler}>
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
