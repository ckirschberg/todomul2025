import React, { createContext, useState } from "react";
import Todo from "./Todo";
import { url, apikey } from './api'

// 1. Create Context
export const TodoContext = createContext();



const createTodo = async (todo) => {
    const url = 'https://kvsrawgavxkrsvmivjvf.supabase.co/rest/v1';
    const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2c3Jhd2dhdnhrcnN2bWl2anZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNDExMzksImV4cCI6MjA3NDcxNzEzOX0.xGPY_82uf8focdGT05Jt62u5Z_oNcoOBzvaFgGb6X1I';

    const result = await fetch(url + "/todos", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            'Content-Type': "application/json",
            'apikey': apikey,
            'Authorization': "Bearer " + apikey,
            'prefer': 'return=representation'
        }
    }).then(response => response.json())
    
    console.log(result[0]);
    
    return result[0];
}


// 2. Create Provider Component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const data = await fetch(url + "/todos", {
      headers: {
        apikey: apikey,
        Authorization: 'Bearer ' + apikey
      }
    }).then(response => response.json())

    setTodos(data);
    //console.log(data);
  }


  // Function to add a new todo
  async function addTodo(title) {
      // Must know title

      if (title !== "") {
        const newTodoItem = new Todo(title, false, new Date())


        // kald supabase, gem ny todo
        const todoFromServer = await createTodo(newTodoItem);
        
        setTodos([...todos, todoFromServer ]); //js spread operator
      }
      else {
        alert("Du skal da 'udfylde' først for 'søren' da")
      }
      // Tilføj newTodoItem til min todo list 
    }

    

//   const addTodo = (text) => {
//     const newTodo = { id: Date.now(), text, completed: false };
//     setTodos((prevTodos) => [...prevTodos, newTodo]);
//   };

  return (
    <TodoContext.Provider value={{ todos, addTodo, getTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

