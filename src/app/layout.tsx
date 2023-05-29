import { ReactNode } from 'react'
import './globals.css'
// eslint-disable-next-line camelcase
import { Baloo_2, Roboto } from 'next/font/google'
import { Header } from '@/components/Header'

const baloo = Baloo_2({
  weight: '700',
  variable: '--font-baloo',
  subsets: ['latin'],
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Coffe Delivery',
  description: 'By: Matheus Fonteles',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baloo.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
