export default function TodoItem({todo}) {
    const isRed = todo.completed ? 'red' : 'green';

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
        <h2 style={{color: isRed}}>{todo.title} {todo.completed.toString()}</h2>
    )
}