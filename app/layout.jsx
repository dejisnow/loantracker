import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/Components/Nav'
import { AuthProvider } from './AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LoanTrack',
  description: 'An app that focuses on loan manangement',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <Nav/>
        {children}
      

        </AuthProvider>
        
      
        </body>
    </html>
  )
}
