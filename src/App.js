import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'; // her importerer jeg TodoList ind i App.js
import Todo from "./Todo"
import { useEffect, useState, useContext } from 'react';
import AddTodo from './AddTodo';
import { createClient } from '@supabase/supabase-js'

import SignUp from './SignUp';
import { TodoContext, TodoProvider } from './TodoContext';
import MainContent from './MainContent';

// function add5and2(a, b) {
//   return a + b;
// }
// add(5,2);
// add(7,2);
  

//const supabaseUrl = 'https://vrpvsqgakzrxyvbrwmnr.supabase.co'
//const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycHZzcWdha3pyeHl2YnJ3bW5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4NzkxMDgsImV4cCI6MjA3NDQ1NTEwOH0.pMkzWBrAF8u4kMsH5o6ZP679JI4u0c7CxM-FLZ0XK_0';
//const supabase = createClient(url, apikey)


function App() {
  
  // const [ todos, setTodos ] = useState([]);
  // Vi 'leger' at vi har hentet disse data fra serveren og databasen.
  

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



    
    
    
    // jsx
  return (
    <TodoProvider>
      <MainContent />
    </TodoProvider>
  );
}

export default App;
