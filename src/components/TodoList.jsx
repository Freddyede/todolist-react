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
    
    const removeTodo = label => {
        const newTodos = todos.filter((element) => element.label !== label);
        setTodos(newTodos);
    }

    const updateTodo = (label, newLabel) => {
        const newTodos = todos.find(element =>element.label === label)
        newTodos.label = newLabel;
        const newTodosEffect = todos.filter(element => element.label !== label);
        setTodos(newTodosEffect);
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
                {todos.map(({label, status}) => (
                    <TodoCard
                        key={label}
                        status={status}
                        label={label}
                        removeTodos={(label) => removeTodo(label)}
                        updateTodos={(label, newLabel) => updateTodo(label, newLabel)}
                    />
                ))}
            </main>
        </>
    );
};

export default TodoList;