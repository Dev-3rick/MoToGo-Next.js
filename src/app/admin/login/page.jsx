'use client'
import Button from '@/components/Fragment/Button'
import Nav from '@/components/Nav'
import React from 'react'

const page = () => {
    return (
        <div>
            <Nav>
                <Button
                    text={'Cadastre - se'}
                    className={
                        'bg-[#008AFF]/60  focus:ring-2  p-2  rounded-md font-semibold shadow-xl w-full  '
                    }
                    type={'button'}
                    setClick={() => router.push('cadastro')}
                />{' '}
            </Nav>
        </div>
    )
}

export default page
