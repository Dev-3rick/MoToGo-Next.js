import React from 'react'
import Input from '../Fragment/Input'
import Button from '../Fragment/Button'

const FormPedidos = () => {
    const [logradouroColeta, setLogradouroColeta] = React.useState('')
    const [numero, setNumero] = React.useState('')
    const [obs, setObs] = React.useState('')

    const [logradouroEntrega, setLogradouroEntrega] = React.useState('')
    const [numeroEntrega, setNumeroEntrega] = React.useState('')
    const [referenciaEntrega, setReferenciaEntrega] = React.useState('')

    const [mostrarEntrega, setMostrarEntrega] = React.useState(true)

    const FormPedidoSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="relative">
            <img
                className="absolute right-9 z-[-2] top-1"
                src="./ImgApp/elementosAzuis.png"
                alt=""
            />
            <form onSubmit={FormPedidoSubmit}>
                <div className="flex flex-col items-center mt-32 rounded-[40px] gap-3 pb-10 w-[336px] bg-[#2D4054]">
                    {mostrarEntrega ? (
                        <div>
                            <h1 className="font-bold text-center pb-10 pt-10  text-4xl">
                                Coleta
                            </h1>
                            <Input
                                id="logradouroColeta"
                                label="Logadouro de Entrega"
                                type="text"
                                value={logradouroColeta}
                                setValue={setLogradouroColeta}
                            />
                            <Input
                                id="NumColeta"
                                label="Numero"
                                type="number"
                                value={numero}
                                setValue={setNumero}
                            />
                            <Input
                                id="EndEntrega"
                                label="Referencia"
                                type="text"
                                value={obs}
                                setValue={setObs}
                            />{' '}
                            <div>
                                <label htmlFor="obs" className="mr-auto">
                                    Obs:
                                </label>
                                <textarea
                                    name="Obs"
                                    id="obs"
                                    cols="24"
                                    rows="2"
                                    className={`shadow- p-3 rounded-md border border-zinc-400 bg-zinc-100 outline-none`}
                                ></textarea>{' '}
                                <Button
                                    color="bg-[#008AFF]/60 "
                                    text="Continuar"
                                    type="button"
                                    setClick={() => {
                                        setMostrarEntrega(
                                            (mostrarEntrega) => !mostrarEntrega
                                        )
                                    }}
                                />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h1 className="font-bold text-center pb-10 pt-10  text-4xl">
                                Entrega
                            </h1>
                            <Input
                                id="LogadouroEntrega"
                                label="Logadouro de Entrega"
                                type="text"
                                value={logradouroEntrega}
                                setValue={setLogradouroEntrega}
                            />
                            <Input
                                id="NumEntrega"
                                label="Numero"
                                type="number"
                                value={numeroEntrega}
                                setValue={setNumeroEntrega}
                            />
                            <Input
                                id="RefEntrega"
                                label="Referencia"
                                type="text"
                                value={referenciaEntrega}
                                setValue={setReferenciaEntrega}
                            />{' '}
                            <Button
                                color="bg-[#008AFF]/60 "
                                text="Continuar"
                                type="submit"
                            />
                        </div>
                    )}
                </div>
            </form>{' '}
        </div>
    )
}

export default FormPedidos
