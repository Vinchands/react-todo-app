import TodoRow from '@components/TodoRow/TodoRow'
import Todo from '@components/Todo/Todo'
import './FilterableTodoList.css'

type TodoType = {
    id: number;
    title: string;
    completed: boolean;
}

interface FilterableTodoListProps {
    todoList: TodoType[];
    searchQuery: string;
}

export default function FilterableTodoList({ todoList, searchQuery }: FilterableTodoListProps): JSX.Element {
    
    const filtered = todoList
    .filter((todo: TodoType) => todo.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .map((todo: TodoType) => <Todo key={ todo.id } todo={ todo } />)
    
    const full = todoList.map((todo: TodoType) => <Todo key={ todo.id } todo={ todo } />)
    
    return (
        <>
            {
                searchQuery &&
                <p className='text-center mb-2 py-1'>Found { filtered.length } for "{ searchQuery }"</p>
            }
            <TodoRow>
                {
                    searchQuery
                    ? filtered.length? filtered : full
                    : full
                }
            </TodoRow>
        </>
    )
}
