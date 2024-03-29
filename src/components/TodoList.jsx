import '../assets/todoLists.component.css'
import TodoCard from "./TodoCard.jsx";
import { useState } from "react";

const TodoList = (props) => {
    const [active, setActive] = useState(false);
    const [newLabel, setNewLabel] = useState("");
    const [todos, setTodos] = useState(props.todos);

    const createNewTodos = () => {
        setActive(!active);
    }

    const changeLabelTodos = event => {
        event.preventDefault();
        setNewLabel(event.target.value);
    }

    const submitResponse = () => {
        todos.push({label: newLabel, status: false});
        setTodos(todos);
        setActive(false);
    }


    return (
        <>
            <header>
                { !active && <button onClick={createNewTodos}><i className="fa-solid fa-circle-plus"></i> Tasks</button> }
                {
                    active &&
                    <>
                        <input
                            type="text"
                            onChange={(e) => changeLabelTodos(e)}
                            placeholder="New task"
                        />
                        <button onClick={submitResponse}>Envoyer</button>
                    </>
                }
            </header>
            <main>
                {todos.map(({label, status}) => (<TodoCard key={label} status={status} label={label}/>))}
            </main>
        </>
    );
};

export default TodoList;