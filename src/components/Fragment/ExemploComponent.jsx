import React, { useEffect } from 'react'

const Example = () => {
    const distanceCallback = (response, status) => {
        if (status === 'OK') {
            // alert(JSON.stringify(response))
            // Aqui você pode processar a resposta conforme necessário
        } else {
            console.error('Erro na solicitação da API:', status)
        }
    }

    useEffect(() => {
        const origin1 = new window.google.maps.LatLng(55.930385, -3.118425)
        const origin2 = 'Greenwich, England'
        const destinationA = 'Stockholm, Sweden'
        const destinationB = new window.google.maps.LatLng(50.087692, 14.42115)

        const service = new window.google.maps.DistanceMatrixService()
        service.getDistanceMatrix(
            {
                origins: [origin1, origin2],
                destinations: [destinationA, destinationB],
                travelMode: 'DRIVING',
            },
            distanceCallback
        )
    }, [])

    return <div></div>
}

export default Example
