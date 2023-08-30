import React from 'react'
import Form from '@/components/Forms/Form'
import PageSignupClient from './PageSignupClient'
import Button from '@/components/Fragment/Button'
import Cadastro from '@/components/Cadastro'

const PageLogin = () => {
    const [optionClient, setOptionClient] = React.useState('')

    return (
        <div>
            {optionClient === 'Cliente' ? (
                <PageSignupClient />
            ) : optionClient === 'Cadastre - se' ? (
                <Cadastro />
            ) : (
                <>
                    <img
                        src="./ImgApp/Union.png"
                        className="absolute z-[-2] top-0 left-0"
                    ></img>
                    <img src="./ImgApp/Motoboy.png " className="z-[-0]" />
                    <h1 className="font-bold text-center  text-4xl">MotoGo</h1>
                    <Button
                        text={'Cadastre - se'}
                        className={' mb-5 block text-center '}
                        type={'button'}
                        setClick={setOptionClient}
                    />{' '}
                    <Form onclick={setOptionClient} />
                </>
            )}
        </div>
    )
}

export default PageLogin
