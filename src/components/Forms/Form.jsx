'use client'
import { useEffect, useState } from 'react'
import Input from '../Fragment/Input'
import Button from '../Fragment/Button'
import useAuth from '@/hooks/useAuth'
import Toast from '../Toast'
import { useRouter } from 'next/navigation'

const Form = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { login, error } = useAuth()
    const router = useRouter()
    const data = {
        email,
        senha,
    }

    const submit = (event) => {
        event.preventDefault()
        login(data)
    }

    return (
        <form onSubmit={submit} className="flex flex-col w-[275px] gap-3 mt-5">
            <Input
                placeholder="Exemplo@exemplo.com"
                type="email"
                label="Email"
                value={email}
                setValue={setEmail}
                id="email"
                className={''}
            />
            <Input
                id="senha"
                placeholder="******"
                type="password"
                label="Senha"
                value={senha}
                setValue={setSenha}
            />

            <Toast />

            <Button
                text="Continuar"
                color="bg-[#008AFF]/60  "
                type="submit"
                className=" mt-2  "
            />
        </form>
    )
}

export default Form
;('')
