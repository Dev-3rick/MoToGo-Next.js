import React, { useEffect, useState } from 'react'
import Input from '../Fragment/Input'
import Button from '../Fragment/Button'
import useAuth from '@/hooks/useAuth'
import Toast from '../Toast'

const Form = ({ onclick }) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [user, setUser] = useState(null)

    const { login, error } = useAuth()
    console.log('🚀 ~ error:', error)

    const data = {
        email,
        senha,
        user,
    }

    const submit = (event) => {
        event.preventDefault()
        onclick(user)
        login(data)
    }

    return (
        <div className="w-full  px-4">
            <form onSubmit={submit}>
                <Input
                    placeholder="Exemplo@exemplo.com"
                    type="email"
                    label="Email"
                    value={email}
                    setValue={setEmail}
                    id="email"
                />
                <Input
                    id="senha"
                    placeholder="******"
                    type="password"
                    label="Senha"
                    value={senha}
                    setValue={setSenha}
                />

                <Toast className="p-2 mt-2 text-white bg-red-200 rounded-md z-50" />

                <div className="flex gap-1 items-center  mt-5  mb-8">
                    <Button
                        text="Entregador"
                        color="bg-orange/60"
                        type="button"
                        setClick={setUser}
                    />
                    <Button
                        text="Cliente"
                        color="bg-orange/60"
                        type="button"
                        setClick={setUser}
                    />
                </div>

                <div className="w-2/3 mx-auto ">
                    <Button
                        text="Continuar"
                        color="bg-[#008AFF]/60 "
                        type="submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default Form
;('')
