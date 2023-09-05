'use client'
import { createContext, useEffect, useState } from 'react'
import { api } from '@/config/api'
import { useRouter } from 'next/navigation'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const router = useRouter()

    const [errorReq, setErrorReq] = useState('')
    const [user, setUser] = useState(null)
    const [notAuthorized, setNotAuthorized] = useState(null)
    const [showToaster, setShowToaster] = useState({
        status: false,
        message: '',
        tag: '',
    })


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

    const registerUser = async (name, email, senha, telefone) => {
        const values = { name, email, telefone, senha }
        await api
            .post('/register', values)
            .then((response) => {
                if (response.status !== 201) return
                setShowToaster({
                    status: true,
                    message: 'Conta criada com sucesso',
                    tag: 'success',
                })
                setTimeout(() => {
                    setShowToaster({
                        status: false,
                        message: '',
                        tag: '',
                    })
                    router.push('/login')
                }, 2000)
            })
            .catch((error) => {
                setErrorReq(error?.response?.data?.message)
                setTimeout(() => {
                    setErrorReq('')
                }, 2000)
            })
    }

    const values = {
        login,
        user,
        registerUser,

    }

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }
