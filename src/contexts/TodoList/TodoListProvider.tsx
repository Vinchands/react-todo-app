import TodoListContext from './TodoListContext'
import { useState } from 'react'

type TodoType = {
    id: number;
    title: string;
    completed: boolean;
}

export default function TodoListProvider({ children }: { children: React.ReactNode }) {
    
    const [todos, setTodos] = useState<TodoType[]>([])
    
    return (
        <TodoListContext.Provider value={{ todos, setTodos }}>
            { children }
        </TodoListContext.Provider>
    )
}
