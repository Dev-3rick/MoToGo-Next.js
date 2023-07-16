import React from 'react'
import Input from './Input'
import Button from './Button'

const submit = () => {}
const Form = () => {
    return (
        <div className="w-full py-3 px-4">
            <form onSubmit={submit}>
                <Input
                    placeholder="Exemplo@exemplo.com"
                    type="email"
                    label="Email"
                />
                <Input placeholder="******" type="password" label="Email" />
                <div className="flex gap-1 items-center  mt-5  mb-16">
                    <Button text="Entregador" color="bg-orange/60" />
                    <Button text="Cliente" color="bg-orange/60" />
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
