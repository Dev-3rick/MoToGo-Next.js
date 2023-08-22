import { useState, useEffect } from 'react'

const useDistanceMatrix = (origin, destination) => {
    const [distanceData, setDistanceData] = useState(null)

    useEffect(() => {
        const handleResponse = (response) => {
            if (response) {
                setDistanceData(response.rows[0].elements[0])
            }
        }

        const options = {
            destinations: [destination],
            origins: [origin],
            travelMode: 'DRIVING',
        }

        const distanceMatrixService =
            new window.google.maps.DistanceMatrixService()
        distanceMatrixService.getDistanceMatrix(options, handleResponse)
    }, [origin, destination])

    return distanceData
}
export default useDistanceMatrix
