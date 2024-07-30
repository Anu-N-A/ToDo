import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setToDo] = useState('');

  const addToDo = () => {
    if (toDo.trim() !== '') { // Prevent adding empty to-dos
      setTodos([...toDos, toDo]);
      setToDo(''); // Clear the input field after adding
    }
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕</h2>
      </div>
      <div className="input">
        <input 
          value={toDo} 
          onChange={(e) => setToDo(e.target.value)} 
          type="text" 
          placeholder="🖊️ Add item..." 
        />
        <i onClick={addToDo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((value, index) => (
          <div className="todo" key={index}>
            <div className="left">
              <input type="checkbox" name="" id="" />
              <p>{value}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
