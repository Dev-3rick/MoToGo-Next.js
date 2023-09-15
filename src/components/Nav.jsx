import React, { Children } from 'react'

const Nav = ({ children }) => {
    return (
        <>
            <header className="bg-gradient-to-l from-gray-95000 rounded-b-2xl top-0 w-full bg-[#b4471a]/60 text-black text-base p-4 pl-12 pr-44 flex justify-between items-center shadow-lg">
                <div className="flex items-center">
                    <img
                        src="./ImgApp/Motoboy.png  "
                        alt="Logo"
                        className="h-16 ml-4 mr-5"
                    />
                    <h1 className="text-3xl  font-semibold">MotoGo</h1>
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
            {children}
        </>
    )
}

export default Nav
