import Button from '@/components/Fragment/Button'
import React from 'react'

const PageSignupClient = () => {
    const newPrice = () => {}
    return (
        <div
            style={{ borderRadius: '81px' }}
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
                    src="./ImgApp/Hero.png"
                    className="absolute z-[-2] w-full right-4 top-3"
                />
                <img
                    src="./ImgApp/Product Return 1.png"
                    className="z-[-0] m-auto"
                />
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
                    <h1 class="font-bold text-4xl p-2 text-center">
                        Solicite uma entrega{' '}
                    </h1>
                    <span class="text-center">
                        Use cupom para seu primeiro pedido:
                        <strong className="text-orange uppercase">
                            {' '}
                            MoToGo2023
                        </strong>
                        <button className="m-auto p-5 block" onClick={newPrice}>
                            <div className="relative">
                                <img
                                    src="./ImgApp/btnPedido.png"
                                    className="m-auto"
                                />
                                <img
                                    src="./ImgApp/open.png"
                                    className="absolute inset-0 m-auto"
                                />
                            </div>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PageSignupClient
