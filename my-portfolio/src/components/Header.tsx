'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Career', href: '#career' },
    { name: 'Resume', href: '#resume' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='sticky top-0 z-50 bg-comic-yellow/80 backdrop-blur-md supports-[backdrop-filter]:bg-comic-yellow/60 comic-border mb-8'>
      <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Left side: image + title */}
        <div className='flex items-center space-x-4'>
          <div className='relative w-12 h-12 rounded-full border-4 border-red-500 overflow-hidden shadow-md'>
            <Image
              src='/images/headshot.png'
              alt='Headshot'
              fill
              className='object-cover'
            />
          </div>
          <h1
            className={`text-4xl font-extrabold transition-colors duration-500 ${
              scrolled ? 'text-white' : 'text-black'
            }`}
          >
            Kimberlee Haldane
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-2'>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='bg-red-600 text-white font-semibold text-sm px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black border border-black transition-colors duration-200 shadow-md'
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant='ghost'
          className='comic-button md:hidden'
          onClick={toggleMenu}
        >
          <Menu />
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden px-4 pb-4 flex flex-col gap-2'>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              className='bg-red-600 text-white font-semibold text-sm px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black border border-black transition-colors duration-200 shadow-md'
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
