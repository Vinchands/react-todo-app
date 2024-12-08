import './Todo.css'

type TodoProps = {
    todo: { id: number, title: string, completed: boolean };
    onCheck: () => void;
}

export default function Todo({ todo, onCheck }: TodoProps): JSX.Element {
    
    return (
        <div className='todo-container'>
            <span className='truncate'>{ todo.title }</span>
            <input type='checkbox' checked={ todo.completed } onChange={ onCheck } />
        </div>
    )
}
