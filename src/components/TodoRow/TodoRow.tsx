import React from 'react'
import './TodoRow.css'

interface TodoRowProps {
    children: React.ReactNode
}

export default function TodoRow({ children }: TodoRowProps): JSX.Element {
    return (
        <div className='todo-row'>
            { children }
        </div>
    )
}