import { useState } from 'react';
import Todo from './Todo';

export default function AddTodo({ setTodos, todos }) {
    const [ title, setTitle ] = useState("")
    
    function addTodo(e) {
      e.preventDefault()
      // Must know title

      if (title !== "") {
        const newTodoItem = new Todo(todos.length+1, title, false, new Date())

        
        setTodos([...todos, newTodoItem ]); //js spread operator
      }
      else {
        alert("Du skal da udfylde først for søren da")
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