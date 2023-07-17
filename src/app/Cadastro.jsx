import React from 'react'

const Cadastro = () => {
    return (
        <div className="bg">
            <img
                src="./ImgApp/Union.png"
                className="absolute z-[-1] top-0 left-0"
            ></img>{' '}
            <img
                src="./ImgApp/Delivery-service-Orange (4) 2.png"
                className="z-[-0]"
            />
            <h1 className="font-bold text-center text-4xl">MotoGo</h1>
            <span className="mt-1 mb-5 text-center">Cadastre-se</span>
            <Form color="red" />
        </div>
    )
}

export default Cadastro
