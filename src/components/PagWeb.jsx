import React from 'react'
import Nav from './Nav'
import ExemploComponent from "../components/Fragment/ExemploComponent"

const PagWeb = () => {
    return (

        <><ExemploComponent />
            <Nav />
            <img
                src="./ImgApp/Union Master.png"
                className="absolute z-[-1]  -left-72 -top-60"
            ></img>
            <div className="px-32">
                <h1 className="font-bold text-9xl mb-16">MotoGo </h1>{' '}
                <span className="mt-96 mb-5 ">
                    O app de entrega mais rapido do Brasil
                </span>
                <img
                    className=" pd w-[620px] mr-10 "
                    src="./ImgApp/Group 8.17.png"
                ></img>
            </div>
        </>
    )
}

export default PagWeb
