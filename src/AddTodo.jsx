import { useContext, useState } from 'react';
import Todo from './Todo';
import { TodoContext } from './TodoContext';

export default function AddTodo({ setTodos, todos }) {
    const [ title, setTitle ] = useState("")
    const { addTodo } = useContext(TodoContext);

    function handleTitleChange(e) {
    //  console.log(e.target.value);
      setTitle(e.target.value);
    }

    function handleAddTodo(e) {
      e.preventDefault();
      addTodo(title);
      setTitle("");
    }

    return (
        <>
        <h2>Add new todo</h2>
        <form onSubmit={handleAddTodo}>
           <input type="text" placeholder="Title" value={title} onChange={handleTitleChange}/>
           
           <button type="submit">Add todo</button>
         </form>
         </>
    )
}