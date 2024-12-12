import { createContext } from 'react'

type TodoType = {
    id: number
    title: string
    completed: boolean
}

interface TodoListContextProps {
    todos: TodoType[]
    setTodos: (todos: TodoType[]) => void
}

const TodoListContext = createContext<TodoListContextProps>({
    todos: [],
    setTodos: () => {}
})

export default TodoListContext;
