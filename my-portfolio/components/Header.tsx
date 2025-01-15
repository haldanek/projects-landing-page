'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
    { name: 'Skills', href: '#skills' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Career', href: '#career' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-comic-yellow/95 backdrop-blur supports-[backdrop-filter]:bg-comic-yellow/60 comic-border mb-8">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-comic-red">
          Jane Doe
        </Link>
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-comic-black hover:text-comic-red transition-colors">
              {item.name}
            </Link>
          ))}
        </div>
        <Button variant="ghost" className="comic-button md:hidden" onClick={toggleMenu}>
          <Menu />
        </Button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-comic-black hover:text-comic-red hover:bg-comic-yellow transition-colors"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header

