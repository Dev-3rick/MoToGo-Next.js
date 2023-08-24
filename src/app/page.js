'use client'
import React, { useState } from 'react'
import Mochup from './Mochup.jsx'
import PagWeb from '../components/PagWeb.jsx'
import ExemploComponent from '../components/Fragment/ExemploComponent.jsx'

export default function Home() {
    return (
        <div className=" pt-[100px] h-screen flex justify-center items-center bg-orange/60">
            <PagWeb />
            <ExemploComponent />
            <Mochup />
        </div>
    )
}
