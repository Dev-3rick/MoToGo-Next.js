'use client'
import { createContext, useState } from 'react'
import { api } from '@/config/api'
import { useRouter } from 'next/navigation'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [response, setResponse] = useState(null)

    const login = async (data) => {
        try {
            const res = await api.post('login', data)
            setUser(res.data)
            if (res.data.usuarioTipoID == 1) {
                router.push('cliente')
            } else if (res.data.usuarioTipoID == 2) {
                router.push('entregador')
            }
        } catch (response) {
            if (response.response.status == '401') {
                setResponse({
                    status: true,
                    message: 'Email ou senha inválidos!',
                })
                setUser(null)
                setTimeout(() => {
                    setResponse(null)
                }, 3000)
            }
        }
    }

    const registerUser = async (data) => {
        try {
            const response = await api.post('register', data)
            router.push('login')
        } catch (response) {
            if (response.response.status == '401') {
                setResponse({
                    status: true,
                    message: 'Email já Cadastrado',
                })
                setUser(null)
                setTimeout(() => {
                    setResponse(null)
                }, 3000)
            }
        }
    }

    const values = {
        login,
        user,
        setResponse,
        response,
        registerUser,
    }

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }
