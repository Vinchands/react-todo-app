import React from 'react'
import './AppContainer.css'

interface AppContainerProps {
    children: React.ReactNode
}

export default function AppContainer({ children }: AppContainerProps) {
    return (
        <section className='app-container group'>
            { children }
        </section>
    )
}
