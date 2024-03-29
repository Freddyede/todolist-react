import '../assets/todoCards.component.css';
import {useState} from "react";

const TodoCard = ({label, status, removeTodos, updateTodos}) => {
    const [active, setActive] = useState(false);
    const [newLabel, setNewLabel] = useState("");
    const changeState = () => {
        setActive(false);
        updateTodos(label, newLabel);
    }
    return (
        !active ?
            <div className={ status ? 'card success' : 'card danger' } onClick={ () => setActive(!active) }>
                <div className="card-body">
                    <h3>{ label }</h3>
                </div>
                <div className="card-footer">
                    <button onClick={ () => removeTodos(label) }>Delete</button>
                </div>
            </div>
        :
            <div className="card">
                <textarea
                    onChange={(e) => {
                        let val = e.target.value;
                        setNewLabel(val);
                    }}
                    onBlur={changeState}
                    defaultValue={label}
                />
            </div>
    )
};

export default TodoCard;