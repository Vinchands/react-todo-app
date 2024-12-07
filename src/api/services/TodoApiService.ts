import api from '@utils/TodoApi'

export async function getTodos() {
    try {
        const response = await api.get('/todos')
        return response.data
    } catch (error) {
        console.error('Error fetching todo: ', error)
        throw error
    }
}

export async function createTodo(todo: object) {
    try {
        const response = await api.post('/todos', todo)
        return response.data
    } catch (error) {
        console.error('Error creating todo: ', error)
        throw error
    }
}

export async function updateTodo(id: number, todo: object) {
    try {
        const response = await api.put(`/todos/${id}`, todo)
        return response.data
    } catch (error) {
        console.error('Error updating todo: ', error)
        throw error
    }
}

export async function deleteTodo(id: number) {
    try {
        await api.delete(`/todos/${id}`)
    } catch (error) {
        console.error('Error deleting todo: ', error)
        throw error
    }
}
