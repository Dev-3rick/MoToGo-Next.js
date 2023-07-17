import React, { useEffect, useState } from 'react'
import Input from './Input'
import Button from './Button'

const Form = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [user, setUser] = useState(null)

    const submit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="w-full py-3 px-4">
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

                <div className="flex gap-1 items-center  mt-5  mb-16">
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
