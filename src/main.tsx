import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoListProvider from '@contexts/TodoList/TodoListProvider'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoListProvider>
      <App />
    </TodoListProvider>
  </StrictMode>,
)
