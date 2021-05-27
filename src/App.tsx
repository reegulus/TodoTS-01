import React from 'react';
import './App.css';
import {Header} from "./Header";

function App() {
  return (
      <div className="App">
        <div className="todoList">
          <Header/>
          <div className="todoList-tasks">
            <div className="todoList-task">
              <input type="checkbox" checked={true}/>
              <span>CSS</span>
            </div>
            <div className="todoList-task">
              <input type="checkbox" checked={false}/>
              <span>JS</span>
            </div>
            <div className="todoList-task">
              <input type="checkbox" checked={false}/>
              <span>ReactJS</span>
            </div>
            <div className="todoList-task">
              <input type="checkbox" checked={true}/>
              <span>Patterns</span>
            </div>
          </div>
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
