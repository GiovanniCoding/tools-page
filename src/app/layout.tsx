import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '300',
})

export const metadata: Metadata = {
  title: 'Tools',
  description: 'Tools for everyday use',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
