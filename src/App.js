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
  const hardCodedTodos = [
        new Todo(1, 'Køb ind', false, new Date(2025,0,1,12,20)),
        new Todo(2, 'Gå tur med hunden', true, new Date(2025,0,1,12,20)),
        new Todo(3, 'Gør Persian endnu sejere', false, new Date(2025,0,1,12,20)),
    ]


function App() {
  const [ happy, setHappy ] = useState(true); // false er startværdien
  const [ todos, setTodos ] = useState(hardCodedTodos);
  const [ title, setTitle ] = useState("")
  // Vi 'leger' at vi har hentet disse data fra serveren og databasen.


    function switchBoolean() {
      // let newHappy = false;
      // if (happy === false) {
      //   newHappy = true;
      // } 
      // setHappy(newHappy);

      //setHappy(prev => !prev) // Call function, because state updates are async.
      setHappy(!happy)
    }

    function addTodo(e) {
      e.preventDefault()
      // Must know title

      if (title !== "") {
        const newTodoItem = new Todo(todos.length+1, title, false, new Date())
        
        //[...todos ]: This will create a new array and spread the existing objects into it.

        setTodos([...todos, newTodoItem ]);
      }
      else {
        alert("Du skal da udfylde først for søren da")
      }
      // Tilføj newTodoItem til min todo list 
    }
    function handleTitleChange(e) {
      console.log(e.target.value);
      
      setTitle(e.target.value);
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


        <h2>Add new todo</h2>
        <form onSubmit={addTodo}>
          <input type="text" placeholder="Title" value={title} onChange={handleTitleChange}/>
          
          <button type="submit">Add todo</button>
        </form>
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
