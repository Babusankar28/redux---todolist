import { useDispatch } from "react-redux";
import { deleteTodo } from "../slices/todoSlice";
function Todo({ value, index }) {
  const dispatch = useDispatch();

  return (
    <div
      className="d-flex align-items-center justify-content-between p-2 px-4 my-3 border-2 border rounded "
    >
      <p className="m-0 p-0 fw-bold">{value}</p>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => dispatch(deleteTodo(index))}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
