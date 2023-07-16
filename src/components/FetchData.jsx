import React, { useEffect, useState } from 'react'

const MyComponent = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/data')
                const jsonData = await response.json()
                setData(jsonData)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            {data ? (
                <div>
                    <h1>Data:</h1>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default MyComponent
