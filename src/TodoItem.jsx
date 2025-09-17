export default function TodoItem(props) {
    const isRed = props.todo.completed ? 'red' : 'green';

    return (
        <h2 style={{color: isRed}}>{props.todo.title} {props.todo.completed.toString()}</h2>
    )
}