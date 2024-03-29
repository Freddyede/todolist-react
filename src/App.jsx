import './assets/App.css';
import TodoList from "./components/TodoList.jsx";
import { todos } from './data/todos.jsx';

function App() {
    return (<TodoList todos={ todos } />);
}

export default App
