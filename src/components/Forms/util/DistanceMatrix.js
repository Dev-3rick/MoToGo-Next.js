const DistanceMatrix = async (origin, destination) => {
    return new Promise((resolve, reject) => {
        const service = new google.maps.DistanceMatrixService()

        service.getDistanceMatrix(
            {
                origins: [origin],
                destinations: [destination],
                travelMode: 'DRIVING',
            },
            (response, status) => {
                if (status === 'OK') {
                    const distance = response.rows[0].elements[0].distance.text
                    const duration = response.rows[0].elements[0].duration.text
                    console.log({ distance, duration })

                    resolve({ distance, duration })
                } else {
                    console.log('Erro ao obter a matriz de distância:', status)
                    reject(
                        new Error(
                            `Erro ao obter a matriz de distância: ${status}`
                        )
                    )
                }
            }
        )
    })
}

export default DistanceMatrix
