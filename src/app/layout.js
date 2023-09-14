'use client'
import '../styles/globals.css'
import { Inter } from 'next/font/google'

import { AuthProvider } from '@/context/authContext'
import PagWeb from '@/components/PagWeb'
import Mochup from '@/components/Mochup'
import { usePathname, useRouter } from 'next/navigation'
import Admin from './admin/page'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'MotoGo',
    description: 'MotoGo APP',
}

export default function RootLayout({ children }) {
    const location = usePathname()
    const router = useRouter()
    console.log(location)
    return (
        <>
            <head>
                <script
                    async
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9kWuM0oCoy6PsyhIsykG3XNRNZ2HIoe4&libraries=places"
                ></script>
            </head>
            <html lang="pt-br">
                <body>
                    <AuthProvider>
                        {/* <Nav> */}
                        {location.includes('/admin') ? (
                            <Admin />
                        ) : (
                            // <PagWeb>
                            <Mochup>{children}</Mochup>
                            // </PagWeb>
                        )}
                        {/* </Nav> */}
                    </AuthProvider>
                </body>
            </html>
        </>
    )
}
