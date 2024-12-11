import React from 'react'
import './AppContainer.css'

interface AppContainerProps {
    children: React.ReactNode
}

export default function AppContainer({ children }: AppContainerProps) {
    return (
        <section className='app-container group'>
            { children }
            <div className='p-2'>
                <a href='https://github.com/Vinchands' className='block text-center text-slate-400' target='_blank' rel='noopener noreferrer'>
                    <i className='bi bi-github'></i> { new Date().getFullYear() } Vinchands
                </a>
            </div>
        </section>
    )
}
