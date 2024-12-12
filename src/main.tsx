import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoListProvider from '@contexts/TodoList/TodoListProvider'
import NetworkErrorProvider from '@contexts/NetworkError/NetworkErrorProvider'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoListProvider>
        <NetworkErrorProvider>
          <App />
        </NetworkErrorProvider>
    </TodoListProvider>
  </StrictMode>,
)
