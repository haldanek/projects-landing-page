'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header className='sticky top-0 z-50 bg-comic-yellow/80 backdrop-blur-md supports-[backdrop-filter]:bg-comic-yellow/60 comic-border mb-8'>
      <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Left side container with image + title */}
        <div className='flex items-center space-x-4'>
          {/* Image container */}
          <div className='w-16 h-16 rounded-full border-4 border-yellow-400 overflow-hidden'>
            <img
              src='/images/headshot.png'
              alt='Headshot'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Page title (not a link anymore) */}
          <h1 className='text-5xl font-extrabold text-comic-red'>
            Kimberlee Haldane
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-4 text-xl'>
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button
                variant='ghost'
                className='
                  bg-comic-red
                  text-white
                  font-bold
                  border border-black
                  hover:bg-red-700
                  transition-colors
                  rounded-full
                  px-4 py-2
                  text-xl
                '
              >
                {item.name}
              </Button>
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

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className='md:hidden px-4 pb-4 space-y-2'>
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={toggleMenu}>
              <Button
                variant='ghost'
                className='
                  w-full
                  text-left
                  bg-comic-red
                  text-white
                  font-bold
                  border border-black
                  hover:bg-red-700
                  transition-colors
                  rounded-full
                  px-4 py-2
                  text-xl
                '
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
