import AppContainer from '@components/AppContainer/AppContainer'
import ThemeButton from '@components/ThemeButton/ThemeButton'
import Title from '@components/Title/Title'
import Todo from '@components/Todo/Todo'
import { getTodos, createTodo, updateTodo, deleteTodo } from '@services/TodoApiService'
import { useState, useEffect } from 'react'
import './App.css'

type TodoType = {
    id: number
    title: string
    completed: boolean
}

export default function App() {
    
    const [todos, setTodos] = useState<TodoType[]>([])
    
    async function getTodoList() {
        try {
            const { data } = await getTodos()
            setTodos(data)
        } catch (error) { console.error('Error fetching todo list: ', error) }
    }
    
    async function handleCreateTodo(todo: object) {
        try {
            await createTodo(todo)
            getTodoList()
        } catch (error) { console.error('Error creating todo: ', error) }
    }
    
    async function handleTodoCheck(todo: TodoType) {
        try {
            await updateTodo(todo.id, { ...todo, completed: !todo.completed });
            getTodoList()
        } catch (error) { console.error('Error updating todo: ', error) }
    }
    
    useEffect(() => { getTodoList(); }, [todos])
    
    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-bl from-white to-fuchsia-400 p-3 dark:from-slate-900 dark:to-sky-950'>
            <AppContainer>
                <Title />
                <div className='flex gap-1 py-3'>
                    <input type='text' className='grow rounded-md p-2 focus:outline-none dark:text-white dark:bg-slate-700' placeholder='Add todo...' />
                    <button className='font-extrabold bg-sky-700 rounded-md p-2'>
                        <i className='bi bi-plus-lg'></i>
                    </button>
                </div>
                <div className='flex py-3'>
                    <span className='shrink-0 bg-white rounded-l-full p-2 dark:bg-slate-700'>
                        <i className='bi bi-search'></i>
                    </span>
                    <input type='text' className='grow rounded-r-full px-2 focus:outline-none dark:text-white dark:bg-slate-700' placeholder='Search...' />
                </div>
                {
                    todos.length > 0
                    ? todos.map(todo => <Todo todo={ todo } onCheck={ () => handleTodoCheck(todo) } />)
                    : <p className='text-center'>You have nothing todo yet.</p>
                }
            </AppContainer>
            <ThemeButton />
        </div>
    )
}
