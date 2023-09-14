'use client'
import Button from '@/components/Fragment/Button'
import Nav from '@/components/Nav'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/admin/login')
    }, [])
    return <></>
}

export default page
