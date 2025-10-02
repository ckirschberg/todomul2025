import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'; // her importerer jeg TodoList ind i App.js
import Todo from "./Todo"
import { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import { createClient } from '@supabase/supabase-js'
import { url, apikey } from './api'
import SignUp from './SignUp';

// function add5and2(a, b) {
//   return a + b;
// }
// add(5,2);
// add(7,2);
  

//const supabaseUrl = 'https://vrpvsqgakzrxyvbrwmnr.supabase.co'
//const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycHZzcWdha3pyeHl2YnJ3bW5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4NzkxMDgsImV4cCI6MjA3NDQ1NTEwOH0.pMkzWBrAF8u4kMsH5o6ZP679JI4u0c7CxM-FLZ0XK_0';
//const supabase = createClient(url, apikey)


function App() {
  const [ happy, setHappy ] = useState(true); // false er startværdien
  const [ todos, setTodos ] = useState([]);
  // Vi 'leger' at vi har hentet disse data fra serveren og databasen.



  const getTodos = async () => {
    const data = await fetch(url + "/todos", {
      headers: {
        apikey: apikey,
        Authorization: 'Bearer ' + apikey
      }
    }).then(response => response.json())

    setTodos(data);
    //console.log(data);
  }

  useEffect(() => {
    getTodos();
  }, [])

  


// async function getTodos() {
//   let { data, error } = await supabase
//     .from('todos')
//     .select('*')
  
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(data);
    
//     setTodos(data)
//   }
// }



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
        
        <SignUp />

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
