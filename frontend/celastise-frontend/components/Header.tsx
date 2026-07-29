'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
}

const navLinks: NavLink[] = [
  {
    label: 'Collections',
    href: '/collections',
    submenu: [
      { label: 'All Watches', href: '/collections' },
      { label: 'Classic', href: '/collections/classic' },
      { label: 'Professional', href: '/collections/professional' },
      { label: 'Sports', href: '/collections/sports' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    submenu: [
      { label: 'Our Story', href: '/about' },
      { label: 'Craftsmanship', href: '/about/craftsmanship' },
      { label: 'Heritage', href: '/about/heritage' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    submenu: [
      { label: 'Authentication', href: '/services/authentication' },
      { label: 'Restoration', href: '/services/restoration' },
      { label: 'Consultation', href: '/services/consultation' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-celastise-50/95 backdrop-blur-md border-b border-celastise-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
             <img src="" alt="" />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-luxury font-bold text-celastise-900 group-hover:text-rose-500 transition-colors">
                CELASTISE
              </h1>
              <p className="text-xs font-body text-celastise-600 tracking-widest">VALUE BEYOND EXPECTATIONS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="text-sm font-body font-semibold text-celastise-900 hover:text-rose-500 transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </Link>

                {/* Submenu */}
                {link.submenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-luxury opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300"
                  >
                    <div className="py-4">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.label}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-celastise-700 hover:bg-celastise-50 hover:text-rose-500 transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-celastise-100 transition-colors">
              <svg
                className="w-6 h-6 text-celastise-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <Link
              href="/cart"
              className="relative group hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-celastise-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-celastise-600 group-hover:text-rose-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-celastise-100 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6 text-celastise-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-celastise-200 py-4"
          >
            {navLinks.map((link) => (
              <div key={link.label} className="py-2">
                <Link
                  href={link.href}
                  className="block text-sm font-semibold text-celastise-900 hover:text-rose-500 transition-colors py-2"
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="pl-4 space-y-1">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.label}
                        href={sublink.href}
                        className="block text-xs text-celastise-600 hover:text-rose-500 transition-colors py-1"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
}
