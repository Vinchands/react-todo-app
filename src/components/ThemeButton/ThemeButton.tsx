import { useState, useEffect } from 'react'
import './ThemeButton.css'

export default function ThemeButton() {
    
    const theme = localStorage.getItem('theme') || 'light'
    const [isDarkMode, setIsDarkMode] = useState(theme === 'dark')
    
    useEffect(() => {
        
        const nodeRoot = document.documentElement.classList;
        
        localStorage.setItem('theme', isDarkMode? 'dark' : 'light')
        
        if (isDarkMode) nodeRoot.add('dark')
        else nodeRoot.remove('dark')
    
    }, [isDarkMode])
    
    return (
        <div className='fixed right-2 bottom-8 sm:right-4 sm:bottom-12'>
            <div className='relative group'>
                <button className='theme-button' onClick={ () => setIsDarkMode(!isDarkMode) }>
                    <i className={ `bi bi-${!isDarkMode? 'moon-stars-fill' : 'sun-fill'}` }></i>
                </button>
                <div className='theme-tooltip'>Theme</div>
            </div>
        </div>
    )
}
