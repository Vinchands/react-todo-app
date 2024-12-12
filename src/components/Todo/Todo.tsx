import { useState, useContext } from 'react';
import { getTodos, updateTodo, deleteTodo } from '@services/TodoApiService'
import TodoListContext from '@contexts/TodoList/TodoListContext'
import './Todo.css'

interface TodoProps {
    todo: { id: number, title: string, completed: boolean };
}

export default function Todo({ todo }: TodoProps): JSX.Element {
    
    const { setTodos } = useContext(TodoListContext)
    const [checkboxLoading, setCheckboxLoading] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)
    
    async function handleTodoCheck() {
        try {
            setCheckboxLoading(true)
            await updateTodo(todo.id, { ...todo, completed: !todo.completed })
            const { data } = await getTodos()
            setCheckboxLoading(false)
            setTodos(data)
        } catch (error) { 
            setCheckboxLoading(false)
            alert('Failed updating todo: ' + error.message)
            console.error('Error updating todo: ', error)
        }
    }
    
    async function handleDeleteTodo(id: number) {
        try {
            setDeleteLoading(true)
            await deleteTodo(id)
            const { data } = await getTodos()
            setDeleteLoading(false)
            setTodos(data)
        } catch (error) {
            setDeleteLoading(false)
            alert('Failed deleting todo: ' + error.message)
            console.error('Error deleting todo: ', error)
        }
    }
    
    return (
        <div className='todo-container'>
            <div className='flex items-center gap-x-1'>
                {
                    !checkboxLoading
                    ? <input type='checkbox' className='scale-125' checked={ todo.completed } onChange={ handleTodoCheck } disabled={ deleteLoading } />
                    : <span className='animate-spin'><i className='bi bi-arrow-repeat'></i></span>
                }
                <p className={ `${todo.completed? 'line-through italic' : 'font-semilight'} px-1` }>{ todo.title }</p>
            </div>
            {
                !deleteLoading?
                <button className='text-red-500' onClick={() => handleDeleteTodo(todo.id)} disabled={ checkboxLoading }>
                    <i className='bi bi-x-circle'></i>
                </button>
                : <span className='animate-spin'><i className='bi bi-arrow-repeat'></i></span>
            }
        </div>
    )
}