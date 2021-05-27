import React from 'react';
import './Todolist.css';
import {Header} from "./Header";
import {List} from "./List";
import {Footer} from "./Footer";

export function Todolist() {
    return (
        <div className="App">
            <div className="todoList">
                <Header/>
                <List/>
                <Footer/>
            </div>
        </div>
    );
}