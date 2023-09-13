'use client'
import React from 'react'
import useAuth from '@/hooks/useAuth'

const Pedidos = () => {
    const { orders } = useAuth()
    console.log(orders)
    return (
        <div className="m-auto">
            {orders ? (
                <ul>
                    {orders.map((order) => (
                        <li key={order.id_pedido} className="font-bold">
                            {order.valor}
                        </li>
                    ))}
                </ul>
            ) : (
                'Nenhum Pedido ainda'
            )}
        </div>
    )
}

export default Pedidos
