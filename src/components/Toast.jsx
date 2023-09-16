import React from 'react'
import useAuth from '@/hooks/useAuth'

const Toast = () => {
    const { response } = useAuth()
    console.log(response)
    return (
        response &&
        response.status && (
            <div
                className={`text-sm  p-2 mt-2 text-white bg-red-400 rounded-md z-50`}
            >
                <h1>{response.message}</h1>
            </div>
        )
    )
}

export default Toast
