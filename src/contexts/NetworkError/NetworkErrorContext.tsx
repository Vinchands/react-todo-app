import { createContext } from 'react'

type NetworkErrorType = {
    message: string
    [key: string]: unknown
}

interface NetworkErrorContextProps {
    error: NetworkErrorType | null
    setError: (error: NetworkErrorType) => void
}

const NetworkErrorContext = createContext<NetworkErrorContextProps>({
    error: null,
    setError: () => {}
})


export default NetworkErrorContext
