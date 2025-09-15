import TodoItem from "./TodoItem.jsx"

export default function TodoList() {
  return (
    <div style={{border: "2px solid red"}}>
        <h1>Dette er vores todo list. Og Persian er sej.</h1>
        
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </div>
  )
}