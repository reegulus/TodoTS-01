import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Todolist} from "./Todolist";

function App() {
  return (
      <div className="App">
        <div className="todoList">
          <Header/>
            <Todolist/>

          <div className="todoList-footer">
            <button>All</button>
            <button>Completed</button>
            <button>Active</button>
          </div>
        </div>
      </div>
  );
}

export default App;
