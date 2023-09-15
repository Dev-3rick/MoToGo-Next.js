'use client'
import React, { useState } from 'react'
import FormLogin from '@/components/Forms/FormLogin'
import Button from '@/components/Fragment/Button'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col items-center justify-center ">
            {' '}
            <img
                src="./ImgApp/Union.png"
                className="absolute z-[-2] top-0 left-0"
            ></img>
            <img src="./ImgApp/Motoboy.png " className="z-[-2] w-full " />
            <h1 className="font-bold text-center  text-4xl">MotoGo</h1>
            <div className="flex gap-3 items-center mx-8  px-7 justify-center w-full mt-4">
                <Button
                    text={'Cadastre-se'}
                    className={
                        'bg-[#F3C29A]  focus:ring-2  p-2 flex-1 rounded-md font-semibold shadow-xl  '
                    }
                    type={'button'}
                    setClick={() => router.push('cadastro')}
                />{' '}
                <Button
                    text="Entregador"
                    type="button"
                    className={
                        'bg-[#F3C29A]  flex-1  p-2  rounded-md font-semibold shadow-xl '
                    }
                    setClick={() => router.push('cadastro_entregador')}
                />
            </div>
            <FormLogin />
        </div>
    )
}

export default Login
