import React, { useState } from 'react'
import Form from '../components/Forms/Form'
import FormData from '../components/Forms/FormData'
import PageLogin from './PageLogin'
import PageSignupClient from './PageSignupClient'

const Mochup = () => {
    const [type, setType] = useState('cadastro')
    return (
        <div
            style={{ borderRadius: '80px' }}
            className="w-[375px] h-[752px] relative  bg-zinc-200 c-800 z-[-0] flex flex-col rounded-3xl  items-center"
        >
            <img
                src="./ImgApp/apple-iphone-13-pro-max-2021-medium.png"
                className="absolute -top-4  h-[782px] w-[480px] z-[-1] scale-{120} "
            ></img>

            {type == 'cadastrso' ? <PageLogin /> : <PageSignupClient />}
        </div>
    )
}

export default Mochup
