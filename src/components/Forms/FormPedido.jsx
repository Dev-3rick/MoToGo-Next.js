import React from 'react'
import Input from '../Fragment/Input'
import Button from '../Fragment/Button'
import AutocompleteInput from '../Fragment/AutocompleteInput'

const FormPedido = () => {
    const [logradouroColeta, setLogradouroColeta] = React.useState('')
    const [numero, setNumero] = React.useState('')
    const [obs, setObs] = React.useState('')

    const [logradouroEntrega, setLogradouroEntrega] = React.useState('')
    const [numeroEntrega, setNumeroEntrega] = React.useState('')
    const [referenciaEntrega, setReferenciaEntrega] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [mostrarEntrega, setMostrarEntrega] = React.useState(true)

    const FormPedidoSubmit = (event) => {
        event.preventDefault()
    }

    const handleAddressSelected = (selectedAddress) => {
        setAddress(selectedAddress)
    }
    return (
        <>
            <form onSubmit={FormPedidoSubmit}>
                {' '}
                <div className="flex flex-col  bottom-0  absolute  gap-3  pb-10 w-[336px] ">
                    <div className="w-72 m-auto ">
                        {' '}
                        <img
                            className="m-auto  "
                            src="./ImgApp/Caixa.png"
                            alt="icons"
                        />
                        {mostrarEntrega ? (
                            <>
                                <h1 className="font-bold text-center pb-5  text-4xl">
                                    Coleta
                                </h1>

                                <AutocompleteInput
                                    className="w-ful"
                                    onAddressSelected={handleAddressSelected}
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
                                />
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
                                                (mostrarEntrega) =>
                                                    !mostrarEntrega,
                                                console.log(mostrarEntrega)
                                            )
                                        }}
                                        className="mt-6"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <h1 className="font-bold text-center pb-5 mt-10 text-4xl">
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
                                    className="mt-6"
                                />
                            </>
                        )}
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormPedido
