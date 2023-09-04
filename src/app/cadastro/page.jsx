'use client'
import React from 'react'
import FormData from '@/components/Forms/FormData'
import { useRouter } from 'next/navigation'

const Cadastro = () => {
    return (
        <div className="bg">
            <img
                src="./ImgApp/Union.png"
                className="absolute z-[-2] top-0 left-0"
            ></img>{' '}
            <img src="./ImgApp/Formulario.png" className="z-[-0] pt-2" />
            <h1 className="font-bold text-center text-4xl">Usuario</h1>
            <FormData />
        </div>
    )
}

export default Cadastro
