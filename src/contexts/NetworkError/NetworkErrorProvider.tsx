import NetworkErrorContext from './NetworkErrorContext'
import { useState } from 'react'

type NetworkErrorType = {
    message: string
    [key: string]: unknown
}

interface NetworkErrorProviderProps {
    children: React.ReactNode
}

export default function NetworkErrorProvider({ children }: NetworkErrorProviderProps) {
    
    const [error, setError] = useState<NetworkErrorType | null>(null)
    
    return (
        <NetworkErrorContext.Provider value={{ error, setError }}>
            { children }
        </NetworkErrorContext.Provider>
    )
}
