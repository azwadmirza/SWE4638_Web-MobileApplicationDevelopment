import { useCallback, useEffect,  useState } from "react";
import ButtonFunctional from "./Button";

const ToDoFunctional = () => {
  const [items, setItems] = useState([]);
  const [id, setID] = useState(0);
  const [todo, setTodo] = useState({ title: "", description: "" });
  
  useEffect(() => {
    document.title = `ToDo List(${items.length})`;
  }, [items.length]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setItems([...items, { todo, id: id + 1 }]);
    setID(id + 1);
    setTodo({ title: "", description: "" });
  },[items,todo,id]);

  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.todo.title}:={item.todo.description}
          </li>
        ))}
      </ul>
      <form>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={(e) => {
            setTodo({ title: e.target.value, description: todo.description });
          }}
        />
        <input
          type="text"
          name="description"
          value={todo.description}
          onChange={(e) => {
            setTodo({ title: todo.title, description: e.target.value });
          }}
        />
        <ButtonFunctional handleSubmit={handleSubmit}/>
      </form>
    </div>
  );
};

export default ToDoFunctional;