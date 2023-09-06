import React from 'react'
import useAuth from '@/hooks/useAuth'

const Toast = ({ className }) => {
    const { error } = useAuth()
    return (
        error &&
        error.status && (
            <div className={`text-sm  ${className}`}>
                <h1>{error.message}</h1>
            </div>
        )
    )
}

export default Toast
