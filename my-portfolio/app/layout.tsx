import '@/styles/globals.css'
import '@/styles/comic-book.css'
import { Comic_Neue } from 'next/font/google'

const comicNeue = Comic_Neue({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Jane Doe - Technical Writer',
  description: 'Portfolio of Jane Doe, an experienced technical writer specializing in API documentation and user guides.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${comicNeue.className} bg-comic-yellow text-comic-black`}>{children}</body>
    </html>
  )
}

