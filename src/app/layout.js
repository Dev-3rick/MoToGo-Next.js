import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/context/authContext'
import PagWeb from '@/components/PagWeb'
import Mochup from '@/components/Mochup'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'MotoGo',
    description: 'MotoGo APP',
}

export default function RootLayout({ children }) {
    return (
        <>
            <head>
                {' '}
                <script>
                    {function initMap() {
                        console.log('123')
                    }}
                </script>
                <script
                    async
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9kWuM0oCoy6PsyhIsykG3XNRNZ2HIoe4&libraries=places"
                ></script>{' '}
            </head>
            <html lang="en">
                <body>
                    <AuthProvider>
                        <PagWeb>
                            <Mochup>{children}</Mochup>
                        </PagWeb>
                    </AuthProvider>
                </body>
            </html>
        </>
    )
}
