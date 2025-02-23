'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/dishes', label: 'Menu' },
    { href: '/events', label: 'Events' },
    { href: '/chefs', label: 'Our Chefs' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-amber-600">
          La Maison D'Or
        </Link>
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-amber-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button 
          className="md:hidden"
          variant="ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-4 py-2 text-gray-600 hover:bg-amber-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}