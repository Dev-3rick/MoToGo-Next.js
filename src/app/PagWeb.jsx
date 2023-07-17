import React from 'react'
import Nav from './Nav'

const PagWeb = () => {
    return (
        <>
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
        </>
    )
}

export default PagWeb
