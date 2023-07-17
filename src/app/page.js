'use client'
import { useState } from 'react'
import Form from '@/components/Form'
import PagWeb from './PagWeb'
import Nav from './Nav'

export default function Home() {
    const [type, seType] = useState('cadastro')

    return (
        <>
            <Nav />
            <div className=" pt-[100px] h-screen flex justify-center items-center bg-orange/60">
                <PagWeb />
                <div
                    style={{ borderRadius: '80px' }}
                    className="w-[375px] h-[812px] relative  bg-zinc-200 c-800 z-[-0] flex flex-col rounded-3xl  items-center"
                >
                    <img
                        src="./ImgApp/apple-iphone-13-pro-max-2021-medium.png"
                        className="absolute -top-4  h-[832px] w-[480px] z-[-1] scale-{120} "
                    ></img>
                    {type == 'cadastro' ? (
                        <div>
                            <img
                                src="./ImgApp/Union.png"
                                className="absolute z-[-2] top-0 left-0"
                            ></img>{' '}
                            <img
                                src="./ImgApp/Delivery-service-Orange (4) 2.png"
                                className="z-[-0]"
                            />
                            <h1 className="font-bold text-center  text-4xl">
                                MotoGo
                            </h1>
                            <span className="mt-1 mb-5 block text-center">
                                Cadastre-se
                            </span>
                            <Form color="red" />
                        </div>
                    ) : (
                        <div style={{ borderRadius: '80px' }}></div>
                    )}
                </div>
            </div>
        </>
    )
}
