import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'; // her importerer jeg TodoList ind i App.js
import { Todo } from "./Todo"

function App() {
  // Vi 'leger' at vi har hentet disse data fra serveren og databasen.
  const todos = [
        new Todo(1, 'Køb ind', false, new Date(2025,0,1,12,20)),
        new Todo(2, 'Gå tur med hunden', false, new Date(2025,0,1,12,20)),
        new Todo(3, 'Gør Perian endnu sejere', false, new Date(2025,0,1,12,20)),
    ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <TodoList todoItems={todos}/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
