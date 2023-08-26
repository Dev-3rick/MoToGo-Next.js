import React from 'react'

import FormPedido from '../components/Forms/FormPedido'

const PagePedido = () => {
    const [DataPedito, setDataPedido] = React.useState({})
    return (
        <div className="h-full w-[335px] rounded-[40px] ">
            <img
                className=" absolute z-[-2] top-0 left-0"
                src="./ImgApp/elementosAzuis.png"
                alt="icons"
            />

            <div>
                <FormPedido onSubmit={setDataPedido} />
            </div>
        </div>
    )
}

export default PagePedido
