import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'; // her importerer jeg TodoList ind i App.js
import Todo from "./Todo"
import { useState } from 'react';


// function add5and2(a, b) {
//   return a + b;
// }
// add(5,2);
// add(7,2);






function App() {
  const [ happy, setHappy ] = useState(true); // false er startværdien

  // Vi 'leger' at vi har hentet disse data fra serveren og databasen.
  const todos = [
        new Todo(1, 'Køb ind', false, new Date(2025,0,1,12,20)),
        new Todo(2, 'Gå tur med hunden', true, new Date(2025,0,1,12,20)),
        new Todo(3, 'Gør Perian endnu sejere', false, new Date(2025,0,1,12,20)),
    ]

    function switchBoolean() {
      // let newHappy = false;
      // if (happy === false) {
      //   newHappy = true;
      // } 
      // setHappy(newHappy);

      //setHappy(prev => !prev) // Call function, because state updates are async.
      setHappy(!happy)
    }

    // jsx
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <button onClick={switchBoolean}>Are you happy?</button>
        <p>
          {happy.toString()}
        </p>


        <TodoList todoItems={todos}/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
