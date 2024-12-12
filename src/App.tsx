import AppContainer from '@components/AppContainer/AppContainer'
import ThemeButton from '@components/ThemeButton/ThemeButton'
import Title from '@components/Title/Title'
import CreateTodoForm from '@components/CreateTodoForm/CreateTodoForm'
import SearchBar from '@components/SearchBar/SearchBar'
import TodoListContext from '@contexts/TodoList/TodoListContext'
import { getTodos } from '@services/TodoApiService'
import { useRef, useState, useEffect, useContext } from 'react'
import './App.css'
import FilterableTodoList from './components/FilterableTodoList/FilterableTodoList'

export default function App() {
    
    const { todos, setTodos } = useContext(TodoListContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})
    const [searchQuery, setSearchQuery] = useState('')
    
    async function getTodoList() {
        setLoading(true)
        
        try {
            const { data } = await getTodos()
            setLoading(false)
            setTodos(data)
            
        } catch (error: unknown) {
            console.error('Error fetching todo list: ', error)
            alert(error.message)
            setLoading(false)
            setError(error)
        }
    }
    
    useEffect(() => { getTodoList() }, [])
    
    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-bl from-white to-fuchsia-400 p-3 dark:from-slate-900 dark:to-sky-950'>
            <AppContainer>
                <Title />
                <CreateTodoForm />
                {
                    loading? <p className='text-center bg-slate-200 rounded p-3 dark:bg-slate-600'>Loading...</p> : (
                        error.message? <p className='text-center text-red-500 bg-slate-200 rounded p-3 dark:bg-slate-600'>{ error.message }</p> : (
                            todos?.length > 0
                            ? (
                                <>
                                    <SearchBar onSearch={ setSearchQuery } />
                                    <FilterableTodoList todoList={ todos } searchQuery={ searchQuery } />
                                </>
                            )
                            : <p className='text-center bg-slate-200 rounded p-3 dark:bg-slate-600'>You have nothing todo yet.</p>
                        )
                    )
                }
            </AppContainer>
            <ThemeButton />
        </div>
    )
}
