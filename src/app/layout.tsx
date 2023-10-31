import './globals.css'
import QueryProvider from '@/app/utils/QueryProvider'
import { Toaster } from 'react-hot-toast'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body>
        <QueryProvider>
        {children}
        <Toaster />
        </QueryProvider>
        </body>
    </html>
  )
}
