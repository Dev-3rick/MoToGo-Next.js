import React from 'react'
import Form from '@/components/Forms/Form'

const PageLogin = () => {
    return (
        <div>
            <img
                src="./ImgApp/Union.png"
                className="absolute z-[-2] top-0 left-0"
            ></img>
            <img
                src="./ImgApp/Delivery-service-Orange (4) 2.png"
                className="z-[-0]"
            />
            <h1 className="font-bold text-center  text-4xl">MotoGo</h1>
            <span className=" mb-5 block text-center">Cadastre-se</span>
            <Form />
        </div>
    )
}

export default PageLogin
