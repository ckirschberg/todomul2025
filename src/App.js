import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'; // her importerer jeg TodoList ind i App.js
import Todo from "./Todo"
import { useState } from 'react';
import AddTodo from './AddTodo';

// function add5and2(a, b) {
//   return a + b;
// }
// add(5,2);
// add(7,2);
  const hardCodedTodos = [
        new Todo(1, 'Køb ind', false, new Date(2025,11,1,12,20)),
        new Todo(2, 'Gå tur med hunden', true, new Date(2025,0,1,12,20)),
        new Todo(3, 'Gør Persian endnu sejere', false, new Date(2025,0,1,12,20)),
    ]


function App() {
  const [ happy, setHappy ] = useState(true); // false er startværdien
  const [ todos, setTodos ] = useState(hardCodedTodos);
  // Vi 'leger' at vi har hentet disse data fra serveren og databasen.



  // Two == vs === test
  // let count = true;
  // let count2 = 1
  // if (count == count2) {
  //   alert("They are all equal in the eyes of the React God")
  // } else {
  //   alert("They are NOT equal")
  // }



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
        
        <button onClick={switchBoolean}>Are you happy? NO!!!</button>
        <p>
          {happy.toString()}
        </p>


        <AddTodo setTodos={setTodos} todos={todos} />

        <TodoList todoItems={todos} setTodos={setTodos} />

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
