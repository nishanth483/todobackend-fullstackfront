// HandleApi.js
import axios from 'axios';

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl)
    .then(({ data }) => {
      console.log(`data--->`, data);
      setToDo(data);
    });
};

const addToDo = (text, setText, setToDo) => {
  axios.post(`${baseUrl}/save`, { text })
    .then(() => {
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios.post(`${baseUrl}/update`, { _id: toDoId, text })
    .then(() => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (toDoId, setToDo) => {
  axios.post(`${baseUrl}/delete`,{_id:toDoId})
    .then(() => {
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
