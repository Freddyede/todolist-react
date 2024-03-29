import '../assets/todoCards.component.css';

const TodoCard = ({label, status}) => {
    return (
        <div className={ status ? 'card success' : 'card danger' }>
            <div className="card-body">
                <h3>{label}</h3>
            </div>
            <div className="card-footer">

            </div>
        </div>
    )
};

export default TodoCard;