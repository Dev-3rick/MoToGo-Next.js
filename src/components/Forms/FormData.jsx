import React from 'react'
import Input from '../Fragment/Input'
import Button from '../Fragment/Button'

const FormData = () => {
    const [nome, setNome] = React.useState('')
    const [sobrenome, setSobrenome] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [tel, setTel] = React.useState('')

    const clientData = () => {
        event.preventDefault()
    }
    return (
        <form
            className="mt-3 flex flex-col gap-1 w-full py-3 "
            onClick={clientData}
        >
            <Input
                id={`nome`}
                label={`Nome`}
                placeholder={'nome'}
                value={nome}
                setValue={setNome}
                type={'text'}
            ></Input>
            <Input
                id={`Sobrenome`}
                label={`Sobrenome`}
                placeholder={'Sobrenome'}
                value={sobrenome}
                setValue={setSobrenome}
                type={'text'}
            ></Input>
            <Input
                id={`tel`}
                label={`Telefone`}
                placeholder={'Telefone'}
                value={tel}
                setValue={setTel}
                type={'text'}
            ></Input>
            <Input
                id={`senha`}
                label={`senha`}
                placeholder={'senha'}
                value={senha}
                setValue={setSenha}
                type={'password'}
            ></Input>{' '}
            <div className="w-2/3 mx-auto mt-4 ">
                <Button
                    text="Cadastrar"
                    color="bg-[#008AFF]/60 "
                    type="submit"
                />
            </div>
            {/* <Button color="bg-[#008AFF]/60 " text="Cadastrar" /> */}
        </form>
    )
}

export default FormData
