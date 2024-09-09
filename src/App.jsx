import { useState } from 'react'

function TodoForm({ onTodoAdd }) {
    
    const [todoId, setTodoId] = useState(0)
    const [todoTitle, setTodoTitle] = useState('')
    
    function handleClick() {
        onTodoAdd(todoId, todoTitle)
        
        setTodoTitle('')
        setTodoId(todoId + 1)
    }
    
    return (
        <div className="d-flex gap-1">
            <input type="text"
                className="d-flex flex-fill bg-white border-0 focus-ring-none rounded-pill p-2 ps-3"
                placeholder="I want to do..."
                value={ todoTitle }
                onChange={ e => setTodoTitle(e.target.value) }
                onKeyDown={
                    e => {
                    if (e.key === 'Enter' && todoTitle.trim()) handleClick()
                    } 
                } />
            {
                todoTitle.trim() && 
                <button className="d-block btn btn-sm btn-primary fw-bold rounded-pill px-3" onClick={ handleClick }>
                    <i className="bi bi-plus-lg"></i>
                    <span className="d-none d-sm-inline"> Add</span>
                </button>
            }
        </div>
    )
}

function SearchBar({ onSearch }) {
    return (
        <div className="input-group">
            <span className="input-group-text bg-white rounded-start-pill border-0 pe-0">
                <i className="bi bi-search"></i>
            </span>
            <input type="text"
                className="d-flex flex-fill bg-white border-0 focus-ring-none rounded-end-pill p-2 ps-3"
                placeholder="Search..."
                onChange={ e => onSearch(e.target.value) } />
        </div>
    )
}

function Todo({ todo, onTodoDelete }) {
    
    const [todoIsChecked, setTodoIsChecked] = useState(false)
    
    return (
        <div className="card-solid mb-2">
            <div className="d-flex justify-content-between align-items-center card-body bg-info-subtle shadow-sm rounded-5 p-2 ps-3">
                <div className="d-flex form-check align-items-center">
                    <input type="checkbox" className="form-check-input me-3" onChange={ () => setTodoIsChecked(!todoIsChecked) } />
                    <span className={ `fw-semibold ${!todoIsChecked? 'text-decoration-none' : 'fst-italic text-decoration-line-through'}` }>
                        { todo.title }
                    </span>
                </div>
                <button type="button" className="btn btn-sm btn-info rounded-5 shadow-sm dropdown-toggle dropdown-toggle-split px-3" data-bs-toggle="dropdown">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                    <div className="d-flex justify-content-between align-items-center px-2">
                        <span className="fw-semibold">Action</span>
                        <div className="d-flex gap-1">
                            <button className="btn btn-sm btn-danger" title="Delete" onClick={ () => onTodoDelete(todo.id) }>
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function TodoList({ todos, searchText, onTodoDelete }) {
    
    const todoList = []
    
    todos.forEach(todo => {
        if (todo.title.toLowerCase().includes(searchText.toLowerCase())) {
            todoList.push(<Todo key={ todo.id } todo={ todo } onTodoDelete={ onTodoDelete } />)
        }
    })
    
    return (
        <div className="overflow-auto py-3 mt-3" style={{ maxHeight: '342px' }}>
            { 
                todos.length === 0 
                ? <h5 className="fw-semibold text-center text-secondary">You have nothing to do yet.</h5> 
                : (
                    searchText.trim() && todoList.length === 0
                    ? <h5 className="fw-semibold text-center text-secondary">No result.</h5> 
                    : todoList
                )
            }
        </div>
    )
}

function FilterableTodoList() {
    
    const [todos, setTodos] = useState([])
    const [searchText, setSearchText] = useState('')
    
    function handleTodoAdd(todoId, todoTitle) {
        
        const updatedTodos = [...todos]
        
        updatedTodos.push({ id: todoId, title: todoTitle })
        setTodos(updatedTodos)
    }
    
    function handleTodoDelete(todoId) {
        const updatedTodos = [...todos]
        
        setTodos(updatedTodos.filter(todo => todo.id !== todoId))
    }
    
    return (
        <div className="col-12 col-sm-10 col-md-6 card bg-body-tertiary shadow mx-auto" style={{ maxWidth: '482px' }}>
            <div className="card-header">
                <h4 className="h4 fw-bold text-center">
                    <span className="text-info">React</span> <span className="text-secondary">Todo App</span>
                </h4>
            </div>
            <div className="card-body">
                <TodoForm onTodoAdd={ handleTodoAdd } />
                <hr />
                { todos.length > 0 && <SearchBar onSearch={ setSearchText } /> }
                <TodoList todos={ todos } searchText={ searchText } onTodoDelete={ handleTodoDelete } />
            </div>
            <div className="card-footer">
                <h6 className="text-center">
                    &copy; {new Date().getFullYear()}&nbsp;
                    <a href="https://github.com/Vinchands" className="text-info text-decoration-none">
                        Kevin CS { ' ' }
                    </a>
                    <i className="bi bi-github"></i>
                </h6>
            </div>
        </div>
    )
}

export default function App() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 px-3">
            <FilterableTodoList />
        </div>
    )
}
