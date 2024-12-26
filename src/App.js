import "./App.css";
import AddTodo from "./components/AddTodo";
import ViewTodos from "./components/ViewTodos";
function App() {
  return (
    <div className="container  text-center ">
      <div className="col-lg-10 mx-auto shadow-lg mt-2 p-4 rounded">
        <h2>Todo-List</h2>
        <hr />
        <AddTodo />
        <ViewTodos />
      </div>
    </div>
  );
}

export default App;
