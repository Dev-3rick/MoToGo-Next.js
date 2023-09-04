'use client'
import React, { useState } from 'react'

const Mochup = ({ children }) => {
    const [type, setType] = useState('')
    return (
        <div
            style={{ borderRadius: '80px' }}
            className="w-[375px] h-[752px] relative  bg-zinc-200  z-[-0] flex flex-col rounded-3xl  items-center"
        >
            <img
                src="./ImgApp/apple-iphone-13-pro-max-2021-medium.png"
                className="absolute -top-4  h-[782px] w-[480px] z-[-1] "
            ></img>
            {children}
        </div>
    )
}

export default Mochup
