import { createContext } from 'react'

type TodoType = {
    id: number;
    title: string;
    completed: boolean;
}

type TodoListContextType = {
    todos: TodoType[];
    setTodos: (todos: TodoType[]) => void
}

export const TodoListContext = createContext<TodoListContextType>({
    todos: [],
    setTodos: () => {}
})
