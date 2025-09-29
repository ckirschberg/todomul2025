import { useState } from 'react';
import Todo from './Todo';

export default function AddTodo({ setTodos, todos }) {
    const [ title, setTitle ] = useState("")
    
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


    async function addTodo(e) {
      e.preventDefault()
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

    function handleTitleChange(e) {
    //  console.log(e.target.value);
      setTitle(e.target.value);
    }


    return (
        <>
        <h2>Add new todo</h2>
        <form onSubmit={addTodo}>
           <input type="text" placeholder="Title" value={title} onChange={handleTitleChange}/>
           
           <button type="submit">Add todo</button>
         </form>
         </>
    )
}