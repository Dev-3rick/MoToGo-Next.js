'use client'

import Form from '@/components/Form'

export default function Home() {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-orange/60">
            <img
                src="./ImgApp/Union Master.png"
                className="absolute z-[-1]  -left-72 -top-60"
            ></img>
            <div className="px-40">
                <h1 className="font-bold text-9xl mb-16">MotoGo </h1>{' '}
                <span className="mt-96 mb-5 ">
                    O app de entrega mais rapido do Brasil
                </span>
                <img className="w-96" src="./ImgApp/Vectary-texture.png"></img>
            </div>
            <div className="w-[375px] h-[812px] relative  bg-zinc-300 z-[-0] flex flex-col items-center">
                <img
                    src="./ImgApp/Union.png"
                    className="absolute z-[-1] top-0 left-0"
                ></img>{' '}
                <img
                    src="./ImgApp/Delivery-service-Orange (4) 2.png"
                    className="z-[-0]"
                />
                <h1 className="font-bold text-4xl">MotoGo</h1>
                <span className="mt-1 mb-5">Cadastre-se</span>
                <Form color="red" />
            </div>
        </div>
    )
}
