import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ReduxProvider} from '../store/provider';
import NavBar from '@/components/NavBar';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kadasolutions Interview App',
  description: `This app was created by Simon Gergely as a solution for the interview test application for the Junior Frontend Developer position at kadasolutions.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
           <ReduxProvider>
            <NavBar/>
            {children}
          </ReduxProvider>
        </body>
    </html>
  )
}
