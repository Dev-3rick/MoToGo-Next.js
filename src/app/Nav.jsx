import React from 'react'

const Nav = () => {
    return (
        <header className="bg-gradient-to-r from-gray-95000 rounded-b-2xl via-gray-900 top-0 fixed w-full from-gray-800 bg-gray-800 text-white text-base p-3  pl-12 pr-44 flex justify-between items-center shadow-lg">
            <div className="flex items-center">
                <img
                    src="./ImgApp/Delivery-service-Orange (4) 2.png"
                    alt="Logo"
                    className="h-16 ml-4 mr-5"
                />
                <h1 className="text-3xl font-semibold">MotoGo</h1>
            </div>
            <nav>
                <ul className="flex space-x-40 mr-6">
                    <li>
                        <a href="/" className="hover:text-gray-300 ">
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="/sobre" className="hover:text-gray-300">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="/contato" className="hover:text-gray-300">
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
