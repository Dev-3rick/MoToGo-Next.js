'use client'
import React from 'react'
import FormLogin from '@/components/Forms/FormCadastroCliente'

import { Switch } from '@/components/ui/switch'
const Cadastro = () => {
    return (
        <div className=" mt-2  w-72">
            <img
                src="./ImgApp/Union.png"
                className="absolute z-[-2] top-0 left-0"
            ></img>{' '}
            <img src="./ImgApp/Formulario.png" className="w-40 m-auto mt-4" />
            <h1 className="font-bold text-center text-4xl">Usuário</h1>{' '}
            <FormLogin />
        </div>
    )
}

export default Cadastro
