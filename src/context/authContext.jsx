'use client'
import { createContext, useState } from 'react'
import { api } from '@/config/api'
import { useRouter } from 'next/navigation'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [response, setResponse] = useState(null)
    const [orders, setOrders] = useState(null)

    const login = async (data) => {
        try {
            const res = await api.post('login', data)
            setUser(res.data.resultVerifyUser)
            setOrders(res.data.userOrders)
            console.log(user)
            console.log(orders)

            if (res.data.resultVerifyUser.usuarioTipoID == 1) {
                router.push('cliente')
            } else if (res.data.resultVerifyUser.usuarioTipoID == 2) {
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
            await api.post('register', data)
            router.push('login')
        } catch (response) {
            console.log(response)
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
    const registerOrder = async (data) => {
        try {
            const res = await api.post('order', data)
            setOrder(res.data)
            router.push('sucesso')
        } catch (err) {
            console.log(err)
            if (err.response.status == '401') {
                setResponse({
                    status: true,
                    message: 'Erro! Tente novamente.',
                })
                setTimeout(() => {
                    setResponse(null)
                    router.push('pedido')
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
        orders,
        registerOrder,
    }
    console.table(
        response,

        orders
    )
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }
