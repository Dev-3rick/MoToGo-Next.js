import React, { useState, useContext } from 'react'
import Input from '../Fragment/Input'
import Button from '../Fragment/Button'
import { AuthContext, setResponse } from '@/context/authContext'
import Toast from '../Toast'

const FormData = () => {
    const { registerUser, setResponse } = useContext(AuthContext)

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [ConfirmacaoSenha, setConfirmacaoSenha] = useState()
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            nome: nome,
            email: email,
            senha: senha,
            telefone: tel,
        }
        if (data && data.email && data.senha && data.telefone) {
            if (ConfirmacaoSenha === senha) {
                registerUser(data)
                console.log('ok')
            } else {
                setResponse({
                    status: true,
                    message: 'Senha Diferente',
                })
                setTimeout(() => {
                    setResponse(null)
                }, 3000)
            }
        } else {
            setResponse({
                status: true,
                message: 'Dados incompletos',
            })
            setTimeout(() => {
                setResponse(null)
            }, 3000)
        }
    }

    return (
        <form className="mt-3 flex flex-col  w-full  " onSubmit={handleSubmit}>
            <Input
                id={`nome`}
                label={`Nome Completo`}
                placeholder={'Nome'}
                value={nome}
                setValue={setNome}
                type={'text'}
                error={nome.length === 0}
                required
            />
            <Input
                id={`email`}
                label={`E-mail`}
                placeholder={'E-mail'}
                value={email}
                setValue={setEmail}
                type={'email'}
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
            />{' '}
            <Input
                id={`senha`}
                label={`Confirme sua senha`}
                placeholder={'Confirme Sua senha'}
                value={ConfirmacaoSenha}
                setValue={setConfirmacaoSenha}
                type={'password'}
            />
            <Toast />
            <Button
                text="Cadastrar"
                className="bg-[#008AFF]/60 mt-4 "
                type="submit"
            />
            <div className="mt-4 flex justify-center items-center">
                {' '}
                <label htmlFor="Entregador">Cadastre-se como: </label>
                <Button
                    text="Entregador"
                    type="button"
                    className={'bg-[#F3C29A] ml-4 p-2   rounded-md  shadow-xl '}
                    setClick={() => router.push('cadastro_entregador')}
                />
            </div>
        </form>
    )
}

export default FormData
