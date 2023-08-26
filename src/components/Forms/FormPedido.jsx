import React from 'react'
import Input from '../Fragment/Input'
import Button from '../Fragment/Button'
import Place from '../Fragment/Place'

const FormPedido = ({ onSubmit }) => {
    const [mostrarEntrega, setMostrarEntrega] = React.useState(true)

    const [logradouroColeta, setLogradouroColeta] = React.useState('')
    const [numeroColeta, setNumeroColeta] = React.useState('')
    const [obsColeta, setObsColeta] = React.useState('')
    const [referenciaColeta, setReferenciaColeta] = React.useState('')

    const [logradouroEntrega, setLogradouroEntrega] = React.useState('')
    const [numeroEntrega, setNumeroEntrega] = React.useState('')
    const [referenciaEntrega, setReferenciaEntrega] = React.useState('')
    const [obsEntrega, setObsEntrega] = React.useState('')

    const [distanceInfo, setDistanceInfo] = React.useState({
        distance: null,
        duration: null,
    })

    async function DistanceMatrix(originLatLng, destinationLatLng) {
        let distanceInfo = {
            distance: null,
            duration: null,
        }

        function callback(response, status) {
            if (status == 'OK') {
                var origins = response.originAddresses
                var destinations = response.destinationAddresses

                console.log(JSON.stringify(destinations))
                console.log(JSON.stringify(response))
            }
        }
        const service = new google.maps.DistanceMatrixService()
        service.getDistanceMatrix(
            {
                origins: [originLatLng],
                destinations: [destinationLatLng],
                travelMode: 'DRIVING',
            },
            callback
        )

        return distanceInfo
    }

    const FormPedidoSubmit = (event) => {
        event.preventDefault()
        let distanceInfo = DistanceMatrix(logradouroColeta, logradouroEntrega)
        setDistanceInfo(distanceInfo)
        onSubmit({
            logradouroColeta,
            numeroColeta,
            obsColeta,
            referenciaColeta,
            logradouroEntrega,
            numeroEntrega,
            obsEntrega,
            referenciaEntrega,
            distanceInfo,
        })
    }

    return (
        <>
            <form onSubmit={FormPedidoSubmit}>
                {' '}
                <div className="flex flex-col  bottom-0  absolute  gap-3  pb-10 w-[336px] ">
                    <div className="w-72 m-auto ">
                        {' '}
                        <img
                            className="m-auto "
                            src="./ImgApp/Caixa.png"
                            alt="icons"
                        />
                        {mostrarEntrega ? (
                            <>
                                <h1 className="font-bold text-center pb-5  text-4xl">
                                    Coleta
                                </h1>
                                <Place
                                    label="Logadouro "
                                    setSelected={setLogradouroColeta}
                                />
                                <Input
                                    id="nColeta"
                                    label="Numero"
                                    type="number"
                                    value={numeroColeta}
                                    setValue={setNumeroColeta}
                                />
                                <Input
                                    id="ReferenciaColeta"
                                    label="Referencia"
                                    type="text"
                                    v
                                    alue={referenciaColeta}
                                    setValue={setReferenciaColeta}
                                />
                                <div>
                                    <label htmlFor="obs" className="mt-3">
                                        Obs:
                                    </label>
                                    <textarea
                                        name="Obs"
                                        id="obs"
                                        cols="24"
                                        rows="2"
                                        value={obsColeta}
                                        className={`shadow- p-3 w-full rounded-md border border-zinc-400 bg-zinc-100 outline-none`}
                                        onChange={({ target }) => {
                                            setObsColeta(target.value)
                                        }}
                                    ></textarea>{' '}
                                    <Button
                                        color="bg-[#008AFF]/60 "
                                        text="Continuar"
                                        type="button"
                                        setClick={() => {
                                            console.log(
                                                logradouroColeta,
                                                numeroColeta,
                                                obsColeta,
                                                referenciaColeta
                                            )
                                            setMostrarEntrega(
                                                (mostrarEntrega) =>
                                                    !mostrarEntrega
                                            )
                                        }}
                                        className="mt-6"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <h1 className="font-bold text-center pb-5  text-4xl">
                                    Entrega
                                </h1>{' '}
                                <Place
                                    setSelected={setLogradouroEntrega}
                                    label="Logadouro"
                                />
                                <Input
                                    id="NumEntrega"
                                    label="Numero"
                                    type="number"
                                    value={numeroEntrega}
                                    setValue={setNumeroEntrega}
                                />{' '}
                                <Input
                                    id="ReferenciaEntrega"
                                    label="Referencia"
                                    type="text"
                                    value={referenciaEntrega}
                                    setValue={setReferenciaEntrega}
                                />
                                <div>
                                    <label htmlFor="obs" className="mt-3">
                                        Obs:
                                    </label>
                                    <textarea
                                        name="Obs"
                                        id="obs"
                                        cols="24"
                                        rows="2"
                                        value={obsEntrega}
                                        className={`shadow- p-3   w-full rounded-md border border-zinc-400 bg-zinc-100 outline-none`}
                                        onChange={({ target }) => {
                                            setObsEntrega(target.value)
                                        }}
                                    ></textarea>{' '}
                                </div>{' '}
                                <Button
                                    color="bg-[#008AFF]/60 "
                                    text="Continuar"
                                    type="submit"
                                    className="mt-6"
                                />{' '}
                            </>
                        )}
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormPedido
