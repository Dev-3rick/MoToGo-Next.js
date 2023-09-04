'use client'
import { createContext, useEffect, useState } from 'react'
import { api } from '@/config/api'
import { useRouter } from 'next/navigation'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [notAuthorized, setNotAuthorized] = useState(null)
    const router = useRouter()

    // Função que verifica se o usuário tem acesso
    const login = async (data) => {
        try {
            const response = await api.post('login', data)
            setUser(response.data)
            if (response.data.usuarioTipoID == 1) {
                router.push('cliente')
            } else if (response.data.usuarioTipoID == 2) {
                router.push('entregador')
            }
        } catch (err) {
            if (err?.response?.status == '401') {
                setNotAuthorized(true)
                setUser(null)
                setTimeout(() => {
                    setNotAuthorized(null)
                }, 3000)
            }
        }
    }

    const values = {
        login,
        user,
    }

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }
