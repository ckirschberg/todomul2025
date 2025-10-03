import { useState } from 'react';
import Todo from './Todo';

export default function AddTodo({ setTodos, todos }) {
    //const [ title, setTitle ] = useState("")
    
    // 1: Oprettet state variabel som et objekt
    const [formValues, setFormValues] = useState(
        new Todo("", false, new Date())
    )
    

    
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

      if (formValues.title !== "") {
        const newTodoItem = new Todo(formValues.title, false, new Date())

        // kald supabase, gem ny todo
        const todoFromServer = await createTodo(newTodoItem);
        
        setTodos([...todos, todoFromServer ]); //js spread operator
      }
      else {
        alert("Du skal da 'udfylde' først for 'søren' da")
      }
      // Tilføj newTodoItem til min todo list 
    }

    // Generisk funktion til at opdatere state objektet
    // virker kun hvis input har en name="attributs navn" (fra Todo objektet)
    function handleInputChange(e) {
        console.log(e.target.value);
        console.log(e.target.name);
        
        setFormValues((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })

        console.log(formValues); // en bagud...
    }


    return (
        <>
        <h2>Add new todo</h2>
        <form onSubmit={addTodo}>
            {/* Opret med name="attributs navn" */}
           <input type="text" placeholder="Title" name="title" value={formValues.title} onChange={handleInputChange}/>
           <input type="date" placeholder="Due date" name="due_date" value={formValues.due_date} onChange={handleInputChange}/>
           
           <button type="submit">Add todo</button>
         </form>
         </>
    )
}