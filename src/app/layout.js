import '../styles/globals.css'
import { Baloo_2 } from 'next/font/google'

import { AuthProvider } from '@/context/authContext'
import PagWeb from '@/components/PagWeb'
import Mochup from '@/components/Mochup'
import { usePathname, useRouter } from 'next/navigation'
import Admin from './admin/page'
import Nav from '@/components/Nav'

const mainFontFamily = Baloo_2({
    weight: ['400', '500', '700'],
    subsets: ['latin-ext'],
})

export const metadata = {
    title: 'MotoGo',
    description: 'MotoGo APP',
}

export default function RootLayout({ children }) {
    return (
        <>
            <head>
                <script
                    async
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9kWuM0oCoy6PsyhIsykG3XNRNZ2HIoe4&libraries=places"
                ></script>
            </head>
            <html lang="pt-br">
                <body className={mainFontFamily.className}>
                    <AuthProvider>
                        <Nav>
                            <Admin />
                            <PagWeb>
                                <Mochup>{children}</Mochup>
                            </PagWeb>
                        </Nav>
                    </AuthProvider>
                </body>
            </html>
        </>
    )
}
