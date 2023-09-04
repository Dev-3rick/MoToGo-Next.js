import React, { useState } from 'react'
import Input from '../Fragment/Input'
import Button from '../Fragment/Button'
import axios from 'axios' // Importe a biblioteca axios para fazer a solicitação HTTP

const FormData = () => {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        // Crie um objeto com os dados do formulário
        const formData = {
            nome,
            senha,
            telefone: tel,
            email,
        }

        try {
            // Faça uma solicitação POST para o servidor para cadastrar o usuário
            const response = await axios.post('/register', formData)

            // Verifique a resposta do servidor e trate-a conforme necessário
            if (response.status === 201) {
                // O usuário foi cadastrado com sucesso
                console.log('Usuário cadastrado com sucesso')
                // Você pode redirecionar o usuário para outra página ou executar outra ação aqui
            } else {
                // Ocorreu um erro no servidor
                console.error('Erro ao cadastrar o usuário')
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
            />
            <Input
                id={`email`}
                label={`E-mail`}
                placeholder={'E-mail'}
                value={email}
                setValue={setEmail}
                type={'text'}
            />
            <Input
                id={`tel`}
                label={`Telefone`}
                placeholder={'Telefone'}
                value={tel}
                setValue={setTel}
                type={'text'}
            />
            <Input
                id={`senha`}
                label={`Senha`}
                placeholder={'Senha'}
                value={senha}
                setValue={setSenha}
                type={'password'}
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
