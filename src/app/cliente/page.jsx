'use client'
import Button from '@/components/Fragment/Button'
import { useEffect } from 'react'
import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

const Cliente = () => {
    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!user) return router.push('login')
    }, [])

    return (
        user && (
            <div
                style={{ borderRadius: '80px' }}
                className="flex pt-20 justify-start  flex-col gap-[100px]"
            >
                <img
                    src="./ImgApp/containerConfig.png"
                    className="absolute inset-0 top-1 first-letter left-6 pt-6 z-[-2]"
                />
                <img
                    src="./ImgApp/configImg.png"
                    className="absolute inset-0 first-letter left-10  top-3 pt-6 "
                />

                <div className=" pt-20 ">
                    <img
                        src="./ImgApp/elementosAzuis.png"
                        className="absolute z-[-2] w-full right-4 top-3"
                    />
                    <img src="./ImgApp/Caixa.png" className="z-[-0] m-auto" />
                </div>
                <div className="flex flex-col gap-2 items-center ">
                    <img
                        src="./ImgApp/Delivery Onboarding Mobile App UI (Community)/container-bar.png"
                        className="pt-4 pb-5"
                    />
                    <img
                        style={{
                            borderBottomLeftRadius: '80px',
                            borderBottomRightRadius: '80px',
                        }}
                        src="./ImgApp/Delivery Onboarding Mobile App UI (Community)/container.png"
                        className="absolute z-[-2]   w-[365px] h-[365px]"
                    />
                    <div class="flex flex-col  justify-center   text-white">
                        <h1 class="font-bold mx-4 text-4xl  text-center">
                            Solicite uma entrega
                        </h1>
                        <span class="text-center mt-7">
                            Use cupom para seu primeiro pedido:
                            <strong className="text-orange uppercase ">
                                {' '}
                                MoToGo2023
                            </strong>
                            <div className=" mt-10 m-auto w-auto  gap-3 flex justify-center items-center">
                                <Button
                                    text="Novo Pedido"
                                    color="bg-[#0086FF] "
                                    className="p-3 w-min whitespace-nowrap"
                                    setClick={() => router.push('pedido')}
                                />{' '}
                                <Button
                                    text="Ver Pedidos"
                                    color="bg-[#0086FF] "
                                    className="p-3 w-min whitespace-nowrap"
                                    setClick={() =>
                                        router.push('pedidosCliente')
                                    }
                                />
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        )
    )
}
export default Cliente
