import React from 'react'
import './AppContainer.css'

interface AppContainerProps {
    children: React.ReactNode
}

export default function AppContainer({ children }: AppContainerProps) {
    return (
        <section className='app-container group'>
            { children }
            <a href='https://github.com/Vinchands' className='block text-center text-slate-400 mt-5'>
                <i className='bi bi-github'></i> { new Date().getFullYear() } Vinchands
            </a>
        </section>
    )
}
