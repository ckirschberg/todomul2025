
import { TodoContext } from "./TodoContext.js";
import TodoItem from "./TodoItem.jsx"
import { useContext } from "react";


export default function TodoList(props) {
    const { todos } = useContext(TodoContext);

    return (
    <div style={{border: "2px solid red"}}>
        <h1>Dette er vores todo list. Og Persian er sej.</h1>
        
        {todos.length === 0 && <h2>Loading todos... please wait...</h2>}

        {todos.map((todoObject) => {
            return (
                <TodoItem key={todoObject.id?.toString()} todo={todoObject} todos={props.todoItems} setTodos={props.setTodos} />
            )
        })} 

{/* Brug props til at sætte indholdet i child-komponenten fra denne (parent) komponent */}
        {/* <TodoItem title="Køb ind"/>
        <TodoItem title="Persian kan næsten ikke blive sejere"/>
        <TodoItem title="Kat"/>
        <TodoItem title="Hund"/> */}
    </div>
  )
}