'use client'
import React, { useEffect } from 'react'

const page = () => {
    const handleRedirect = () => {
        window.location.href = '/login'
    }

    useEffect(() => {
        handleRedirect()
    }, [])

    return null
}

export default page
