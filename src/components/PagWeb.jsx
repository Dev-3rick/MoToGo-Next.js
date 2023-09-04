import React from 'react'
import Nav from './Nav'
import Mochup from './Mochup'

const PagWeb = ({ children }) => {
    return (
        <>
            <Nav>
                <div className="justify-center items-center mt-11 flex">
                    <div className="px-32 ">
                        <h1 className="font-bold text-9xl mb-16">MotoGo </h1>{' '}
                        <span className="mt-96 mb-5 ">
                            {' '}
                            <img
                                src="./ImgApp/Union Master.png"
                                className="absolute z-[-1]  -left-2 -top-1/4"
                            ></img>
                            O app de entrega mais rapido do Brasil
                        </span>
                        <img
                            className=" pd w-[620px] mr-10 "
                            src="./ImgApp/Group 8.17.png"
                        ></img>{' '}
                    </div>
                    {children}
                </div>
            </Nav>
        </>
    )
}

export default PagWeb
