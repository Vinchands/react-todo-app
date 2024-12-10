import { useState } from 'react'
import TodoListContext from '@contexts/TodoList/TodoListContext'
import './SearchBar.css'

interface SearchBarProps {
    onSearch: (e: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    
    return (
        <div className='searchbar'>
            <span className='search-icon'>
                <i className='bi bi-search'></i>
            </span>
            <input 
                type='text' 
                className='search-input' 
                onChange={ (e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value) }
                placeholder='Search...' />
        </div>
    )
}
