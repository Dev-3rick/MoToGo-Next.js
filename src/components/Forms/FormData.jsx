import React, { useState, useContext } from 'react'
import Input from '../Fragment/Input'
import Button from '../Fragment/Button'

import { AuthContext } from '@/context/authContext'

const FormData = () => {
    const { registerUser } = useContext(AuthContext)

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(nome, email, senha, tel)
        const data = {
            nome: nome,
            email: email,
            senha: senha,
            telefone: tel,
        }

        try {
            // Faça uma solicitação POST para o servidor para cadastrar o usuário
            const response = await registerUser(data)
            // Verifique a resposta do servidor e trate-a conforme necessário
            if (response.status === 201) {
                // O usuário foi cadastrado com sucesso
                showToaster('Usuário cadastrado com sucesso')
            } else {
                // Ocorreu um erro no servidor
                showToaster('Erro ao cadastrar o usuário')
            }
        } catch (error) {
            console.error('Erro ao enviar a solicitação:', error)
        }
    }

    return (
        <form
            className="mt-3 flex flex-col gap-1 w-full py-3 "
            onSubmit={handleSubmit}
        >
            {/* Campos do formulário */}
            <Input
                id={`nome`}
                label={`Nome Completo`}
                placeholder={'Nome'}
                value={nome}
                setValue={setNome}
                type={'text'}
                error={nome.length === 0}
            />
            <Input
                id={`email`}
                label={`E-mail`}
                placeholder={'E-mail'}
                value={email}
                setValue={setEmail}
                type={'text'}
                error={!email.includes('@')}
            />
            <Input
                id={`tel`}
                label={`Telefone`}
                placeholder={'Telefone'}
                value={tel}
                setValue={setTel}
                type={'text'}
                error={tel.length < 10}
            />
            <Input
                id={`senha`}
                label={`Senha`}
                placeholder={'Senha'}
                value={senha}
                setValue={setSenha}
                type={'password'}
                error={senha.length < 6}
            />
            <div className="w-2/3 mx-auto mt-4 ">
                <Button
                    text="Cadastrar"
                    color="bg-[#008AFF]/60"
                    type="submit"
                />
            </div>
        </form>
    )
}

export default FormData
