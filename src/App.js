// App.jsx
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";
import ToDo from "./components/toDo";
import { useState, useEffect } from 'react';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  const handleAddOrUpdate = () => {
    if (isUpdating) {
      updateToDo(toDoId, text, setToDo, setText, setIsUpdating);
    } else {
      addToDo(text, setText, setToDo);
    }
  };

  const handleDelete = (_id) => {
    deleteToDo(_id, setToDo);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add todos"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="add" onClick={handleAddOrUpdate}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => handleDelete(item._id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
