import React from 'react'
import Input from '../components/Fragment/Input'
import Button from '../components/Fragment/Button'
import FormPedido from '../components/Forms/FormPedido'

const PagePedido = () => {
    return (
        <div className="h-full w-[335px] rounded-[40px] ">
            <img
                className=" absolute z-[-2] top-0 left-0"
                src="./ImgApp/elementosAzuis.png"
                alt="icons"
            />

            <div>
                <FormPedido />
            </div>
        </div>
    )
}

export default PagePedido
