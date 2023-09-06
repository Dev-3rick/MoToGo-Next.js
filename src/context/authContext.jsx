'use client'
import { createContext, useEffect, useState } from 'react'
import { api } from '@/config/api'
import { useRouter } from 'next/navigation'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [notAuthorized, setNotAuthorized] = useState(null)

    const login = async (data) => {
        try {
            const res = await api.post('login', data)
            setUser(res.data)
            if (res.data.usuarioTipoID == 1) {
                router.push('cliente')
            } else if (res.data.usuarioTipoID == 2) {
                router.push('entregador')
            }
        } catch (err) {
            if (err?.res?.status == '401') {
                setNotAuthorized(true)
                setUser(null)
                setTimeout(() => {
                    setNotAuthorized(null)
                }, 3000)
            }
        }
    }

    const [errorReq, setErrorReq] = useState('')
    const [showToaster, setShowToaster] = useState({})
    const registerUser = async (data) => {
        try {
            const res = await api.post('/register', data)
            if (res.status === 201) {
                setShowToaster({
                    status: res.status,
                    message: 'Conta criada com sucesso',
                    tag: 'success',
                })
                // setTimeout(() => {
                //     setShowToaster({
                //         status: null,
                //         message: '',
                //         tag: '',
                //     })
                // }, 2000)
            }
            router.push('/login')
        } catch (error) {
            setErrorReq(error?.res?.data?.message)
            setTimeout(() => {
                setErrorReq('')
            }, 2000)
        } finally {
        }

        return showToaster
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
