import { useContext } from 'react';
import { getTodos, updateTodo, deleteTodo } from '@services/TodoApiService'
import TodoListContext from '@contexts/TodoList/TodoListContext'
import './Todo.css'

type TodoProps = {
    todo: { id: number, title: string, completed: boolean };
}

export default function Todo({ todo }: TodoProps): JSX.Element {
    
    const { setTodos } = useContext(TodoListContext)
    
    async function handleTodoCheck() {
        try {
            await updateTodo(todo.id, { ...todo, completed: !todo.completed })
            const { data } = await getTodos()
            setTodos(data)
        } catch (error) { console.error('Error updating todo: ', error) }
    }
    
    async function handleDeleteTodo(id: number) {
        try {
            await deleteTodo(id)
            const { data } = await getTodos()
            setTodos(data)
        } catch (error) { console.error('Error deleting todo: ', error) }
    }
    
    return (
        <div className='todo-container'>
            <div className='flex items-center gap-x-1'>
                <input type='checkbox' checked={ todo.completed } onChange={ handleTodoCheck } />
                <span className='truncate'>{ todo.title }</span>
            </div>
            <button className='delete-btn' onClick={() => handleDeleteTodo(todo.id)}>
                <i className='bi bi-trash'></i>
            </button>
        </div>
    )
}
