import logo from './logo.svg';
import TodoList from './TodoList'; // her importerer jeg TodoList ind i App.js
import Todo from "./Todo"
import { useEffect, useState, useContext } from 'react';
import AddTodo from './AddTodo';
import { createClient } from '@supabase/supabase-js'

import SignUp from './SignUp';
import { TodoContext, TodoProvider } from './TodoContext';


export default function MainContent() {
    const [ happy, setHappy ] = useState(true); // false er startværdien
    const { getTodos } = useContext(TodoContext);

    useEffect(() => {
        getTodos();
    }, [])

    function switchBoolean() {
      // let newHappy = false;
      // if (happy === false) {
      //   newHappy = true;
      // } 
      // setHappy(newHappy);

      //setHappy(prev => !prev) // Call function, because state updates are async.
      setHappy(!happy)
    }


    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <SignUp />

        <button onClick={switchBoolean}>Are you happy? NO!!!</button>
        <p>
          {happy.toString()}
        </p>


        <AddTodo />

        <TodoList />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>    );
}
