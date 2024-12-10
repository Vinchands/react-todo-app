import { useState, useMemo, useContext } from 'react'
import TodoListContext from '@contexts/TodoList/TodoListContext'
import './SearchBar.css'

export default function SearchBar() {
    
    const { todos, setTodos } = useContext(TodoListContext)
    const [text, setText] = useState('')
    
    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
        
        const filteredTodos = todos.filter((todo) =>
            todo.title.toLowerCase().includes(text.toLowerCase())
        )
        
        setTodos(filteredTodos)
    }
    
    return (
        <div className='searchbar'>
            <span className='search-icon'>
                <i className='bi bi-search'></i>
            </span>
            <input 
                type='text' 
                className='search-input' 
                onChange={ handleSearch }
                value={ text }
                placeholder='Search...' />
        </div>
    )
}
