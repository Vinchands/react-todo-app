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

const TodoListContext = createContext<TodoListContextType>({
    todos: [],
    setTodos: () => {}
})

export default TodoListContext;
