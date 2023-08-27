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

    async function DistanceMatrix(logradouro, numero) {
        const logradouroColetaComNumeor = logradouroColeta.split('-')[0]
        const newStreetName = logradouroColetaComNumeor.replace(
            '-',
            ' - ' + numero
        )
        console.log(newStreetName)

        const results = await getGeocode({ address })
        const { lat, lng } = await getLatLng(results[0])

        const service = new google.maps.DistanceMatrixService(
            logradouro,
            numeroColeta
        )
        const distanceCallback = service.getDistanceMatrix(
            {
                origins: [originLatLng],
                destinations: [destinationLatLng],
                travelMode: 'DRIVING',
            },
            callback
        )

        function callback(response, status) {
            if (status == 'OK') {
                var origins = response.originAddresses
                var destinations = response.destinationAddresses

                console.log(JSON.stringify(destinations))
                console.log(JSON.stringify(response))
            }
        }

        return distanceCallback
    }

    const FormPedidoSubmit = (event) => {
        event.preventDefault()

        if (numeroColeta && numeroEntrega) {
            setDistanceInfo(DistanceMatrix(logradouroColeta, logradouroEntrega))
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
            setMostrarEntrega((mostrarEntrega) => !mostrarEntrega)
        } else {
            alert('digite um Numero para Entrega')
        }
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
                                    required
                                />
                                <Input
                                    id="ReferenciaColeta"
                                    label="Referencia"
                                    type="text"
                                    value={referenciaColeta}
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
                                        className="mt-6"
                                        setClick={() => {
                                            if (numeroColeta) {
                                                setMostrarEntrega(
                                                    (mostrarEntrega) =>
                                                        !mostrarEntrega
                                                )
                                            } else {
                                                alert(
                                                    'digite um Numero para coleta'
                                                )
                                            }
                                        }}
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
