import React from 'react'
import Input from '../Fragment/Input'
import Button from '../Fragment/Button'
import dynamic from 'next/dynamic'

const GooglePlacesAutocomplete = dynamic(
    () => import('react-google-places-autocomplete'),
    { ssr: false }
)

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
        <form
            className="flex flex-col items-center pb-10 gap-2"
            onSubmit={FormPedidoSubmit}
        >
            {mostrarEntrega ? (
                <>
                    <GooglePlacesAutocomplete
                        apiKey="AIzaSyC9kWuM0oCoy6PsyhIsykG3XNRNZ2HIoe4"
                        selectProps={{
                            logradouroColeta,
                            onChange: setLogradouroColeta,
                        }}
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
                </>
            ) : (
                <>
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
                </>
            )}
        </form>
    )
}

export default FormPedidos
