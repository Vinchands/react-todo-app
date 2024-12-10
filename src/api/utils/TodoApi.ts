import axios from 'axios'

let requestCount = 0
const REQUEST_LIMIT = 100
const TIME_WINDOW = 60000

let lsatRequestTime = Date.now()

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use(req => {
    const currentTime = Date.now()
    
    if (currentTime - lsatRequestTime > TIME_WINDOW) {
        requestCount = 0
        lsatRequestTime = currentTime
    }
    
    if (requestCount >= REQUEST_LIMIT) {
        return Promise.reject(new Error('Too many requests. Please try again later.'))
    }
    
    requestCount++
    
    return req
}, err => {
    console.error('Request failed: ', err)
    return Promise.reject(err)
})

export default api;
