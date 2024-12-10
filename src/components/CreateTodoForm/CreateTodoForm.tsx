import React, { useState, useContext } from 'react'
import TodoListContext from '@contexts/TodoList/TodoListContext'
import { getTodos, createTodo } from '@services/TodoApiService'
import './CreateTodoForm.css'

export default function CreateTodoForm() {
    
    const { setTodos } = useContext(TodoListContext)
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState('')
    
    async function handleCreate() {
        try {
            setLoading(true)
            await createTodo(text)
            const { data } = await getTodos()
            setLoading(false)
            setText('')
            setTodos(data)
        } catch (error: unknown) {
            setLoading(false)
            alert(error.message)
            console.error('Error creating todo: ', error)
        }
    }
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
    }
    
    return (
        <div className='flex gap-1 py-3'>
            <input 
                type='text' 
                className='grow rounded-md p-2 focus:outline-none dark:text-white dark:bg-slate-700' 
                value={ text } 
                onChange={ handleChange } 
                onKeyDown={ 
                    (e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === 'Enter' && text) handleCreate()
                    }
                } 
                placeholder='Add todo...'
                disabled={ loading } />
            {
                text &&
                <button 
                    className='font-extrabold bg-fuchsia-300 rounded-md p-2 transition-colors ease-linear duration-100 hover:bg-fuchsia-500 dark:bg-sky-600 dark:hover:bg-sky-700'
                    onClick={ handleCreate }
                    disabled={ loading }>
                    <i className='bi bi-plus-lg'></i>
                </button>
            }
        </div>
    )
}
