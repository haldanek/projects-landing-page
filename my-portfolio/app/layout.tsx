import '@/styles/globals.css'
import '@/styles/comic-book.css'
import { Comic_Neue } from 'next/font/google'


const comicNeue = Comic_Neue({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Kimberlee Haldane - Software Engineer &Technical Writer',
  description: 'Portfolio of Kimberlee Haldane, an entry-level software engineer & technical writer.',
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

