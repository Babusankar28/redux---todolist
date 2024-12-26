import Todo from "./Todo";
import { useSelector } from "react-redux";

function ViewTodos() {
  const todo = useSelector((state) => state.todo);
  return (
    <div>
      {todo.map((value, index) => (
        <Todo value={value} index={index} key={index} />
      ))}
    </div>
  );
}

export default ViewTodos;
