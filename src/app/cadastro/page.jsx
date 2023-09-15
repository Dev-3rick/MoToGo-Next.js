'use client'
import React from 'react'
import FormLogin from '@/components/Forms/FormCadastroCliente'

const Cadastro = () => {
    return (
        <div className="bg">
            <img
                src="./ImgApp/Union.png"
                className="absolute z-[-2] top-0 left-0"
            ></img>{' '}
            <img src="./ImgApp/Formulario.png" className="z-[-0] pt-2" />
            <h1 className="font-bold text-center text-4xl">Usuario</h1>
            <FormLogin />
        </div>
    )
}

export default Cadastro
