
import TodoItem from "./TodoItem.jsx"



export default function TodoList(props) {
    
    return (
    <div style={{border: "2px solid red"}}>
        <h1>Dette er vores todo list. Og Persian er sej.</h1>
        
        {props.todoItems.length === 0 && <h2>Loading todos... please wait...</h2>}

        {props.todoItems.map((todoObject) => {
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