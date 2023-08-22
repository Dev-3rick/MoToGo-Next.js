// components/DistanceMatrix.js
import React, { useState, useEffect } from 'react'

const useDistanceMatrix = ({ coleta, retirada }) => {
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    useEffect(() => {
        const origin = new google.maps.LatLng(coleta)
        const destination = google.maps.LatLng(retirada)

        const service = new google.maps.DistanceMatrixService()
        service.getDistanceMatrix(
            {
                origins: [origin],
                destinations: [destination],
                travelMode: 'DRIVING',
            },
            (response, status) => {
                if (status === 'OK') {
                    // Processar a resposta aqui
                    const distance = response.rows[0].elements[0].distance.text
                    const duration = response.rows[0].elements[0].duration.text
                    setDistance(distance)
                    setDuration(duration)
                } else {
                    console.error(
                        `Distance Matrix request failed with status: ${status}`
                    )
                }
            }
        )
    }, [coleta, retirada])

    return distance, duration
}

export default useDistanceMatrix
