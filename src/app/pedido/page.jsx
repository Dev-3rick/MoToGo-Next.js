'use client'
import { useEffect, useState } from 'react'
import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import FormPedido from '@/components/Forms/FormPedido'

const Pedidos = () => {
    const [DataPedito, setDataPedido] = useState({})
    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!user) return router.push('login')
    }, [])

    return (
        user && (
            <div className="h-full w-[335px] rounded-[40px] ">
                <img
                    className=" absolute z-[-2] top-0 left-0"
                    src="./ImgApp/elementosAzuis.png"
                    alt="icons"
                />

                <div>
                    <FormPedido onSubmit={setDataPedido} />
                </div>
            </div>
        )
    )
}

export default Pedidos
