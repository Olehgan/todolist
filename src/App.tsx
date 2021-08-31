import React from 'react';
import './App.css';


function App() {
  debugger
  return (
      <div className="App">
        <Todolist/>
        <Todolist/>
        <Todolist/>
      </div>
  );
}

function Todolist() {
  debugger
  return <div>
    <h3> What to learn</h3>
    <div>
      <input/>
      <button>+</button>
    </div>
    <ul>
      <li><input type="checkbox" checked={true} /> <span>CSS&HTML</span></li>
      <li><input type="checkbox" checked={true} /> <span>JS</span></li>
      <li><input type="checkbox" checked={true} /> <span>React</span></li>
    </ul>
    <div>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  </div>
}

export default App;
