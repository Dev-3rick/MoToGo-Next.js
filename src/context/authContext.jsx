'use client'
import { createContext, useState } from 'react'
import { api } from '@/config/api'
import { useRouter } from 'next/navigation'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const login = async (data) => {
        try {
            const res = await api.post('login', data)
            setUser(res.data)
            if (res.data.usuarioTipoID == 1) {
                router.push('cliente')
            } else if (res.data.usuarioTipoID == 2) {
                router.push('entregador')
            }
        } catch (error) {
            if (error.response.status == '401') {
                setError({
                    status: true,
                    message: 'Email ou senha inválidos!',
                    tag: 'login',
                })
                setUser(null)
                setTimeout(() => {
                    setError(null)
                }, 3000)
            }
        }
    }

    const values = {
        login,
        user,
        error,
    }

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }
