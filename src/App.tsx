import AppContainer from '@components/AppContainer/AppContainer'
import ThemeButton from '@components/ThemeButton/ThemeButton'
import Title from '@components/Title/Title'
import Todo from '@components/Todo/Todo'
import TodoRow from '@components/TodoRow/TodoRow'
import TodoListContext from '@contexts/TodoList/TodoListContext'
import TodoListProvider from '@contexts/TodoList/TodoListProvider'
import { getTodos, createTodo, updateTodo, deleteTodo } from '@services/TodoApiService'
import { useState, useEffect, useContext } from 'react'
import './App.css'

type TodoType = {
    id: number
    title: string
    completed: boolean
}

export default function App() {
    
    const { todos, setTodos } = useContext(TodoListContext)
    
    async function getTodoList() {
        try {
            const { data } = await getTodos()
            setTodos(data)
        } catch (error: unknown) {
            console.error('Error fetching todo list: ', error)
        }
    }
    
    // async function handleCreateTodo(todo: object) {
    //     try {
    //         await createTodo(todo)
    //         getTodoList()
    //     } catch (error) { console.error('Error creating todo: ', error) }
    // }
            
    useEffect(() => { getTodoList() }, [])
    
    return (
        <div className='flex justify-center sm:items-center min-h-screen bg-gradient-to-bl from-white to-fuchsia-400 p-3 dark:from-slate-900 dark:to-sky-950'>
            <AppContainer>
                <Title />
                <div className='flex gap-1 py-3'>
                    <input type='text' className='grow rounded-md p-2 focus:outline-none dark:text-white dark:bg-slate-700' placeholder='Add todo...' />
                    <button className='font-extrabold bg-fuchsia-300 rounded-md p-2 transition-colors ease-linear duration-100 hover:bg-fuchsia-500 dark:bg-sky-600 dark:hover:bg-sky-700'>
                        <i className='bi bi-plus-lg'></i>
                    </button>
                </div>
                
                <div className='flex py-3'>
                    <span className='shrink-0 bg-white rounded-l-full p-2 dark:bg-slate-700'>
                        <i className='bi bi-search'></i>
                    </span>
                    <input type='text' className='grow rounded-r-full px-2 focus:outline-none dark:text-white dark:bg-slate-700' placeholder='Search...' />
                </div>
                <TodoRow>
                    {
                        todos?.length > 0
                        ? todos.map(todo => <Todo key={ todo.id } todo={ todo } />)
                        : <p className='text-center'>You have nothing todo yet.</p>
                    }
                </TodoRow>
            </AppContainer>
            <ThemeButton />
        </div>
    )
}
