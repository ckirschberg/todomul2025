import { Flag } from 'lucide-react';

export default function TodoItem({todo}) {
    const isRed = todo.completed ? 'red' : 'green';
    const now = new Date();

    // // This coresponds to props.
    // const cake = { name: 'chocolate', price: 10, weight: 500 };
    
    // //Without destructuring
    // console.log(cake.name);
    // console.log(cake.price);
    // console.log(cake.weight);
    

    // // With destructuring
    // const { name, price, weight } = cake; // destructuring

    // console.log(name);
    // console.log(price);
    // console.log(weight);
    

    return (
        <h2 style={{color: isRed}}>{todo.title} {todo.completed.toString()} {todo.dueDatetime < now && <Flag /> }</h2>
    )
}