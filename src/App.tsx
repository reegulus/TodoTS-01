import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Todolist} from "./Todolist";
import {Footer} from "./Footer";

function App() {
    return (
        <div className="App">
            <div className="todoList">
                <Header/>
                <Todolist/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
