'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const footerSections = [
  {
    title: 'Collections',
    links: [
      { label: 'All Watches', href: '/collections' },
      { label: 'Classic', href: '/collections/classic' },
      { label: 'Professional', href: '/collections/professional' },
      { label: 'New Arrivals', href: '/collections/new' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Story', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Shipping', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
];

const socialLinks = [
  { name: 'Instagram', icon: '📷', href: '#' },
  { name: 'Twitter', icon: '𝕏', href: '#' },
  { name: 'Facebook', icon: 'f', href: '#' },
  { name: 'LinkedIn', icon: 'in', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-celastise-900 to-celastise-950 text-celastise-50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 pb-16 border-b border-celastise-700"
        >
          <div className="max-w-md">
            <h3 className="text-2xl font-luxury font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-celastise-300 mb-6 text-sm">
              Be the first to know about new collections and exclusive offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-celastise-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 placeholder-celastise-400"
              />
              <button className="btn-primary">Subscribe</button>
            </form>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {footerSections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h4 className="font-luxury font-bold text-lg mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-celastise-300 hover:text-rose-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-celastise-800 hover:bg-rose-500 flex items-center justify-center transition-colors"
              title={social.name}
            >
              <span className="text-lg font-bold">{social.icon}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-celastise-700 bg-celastise-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-celastise-400 text-sm text-center md:text-left">
              © 2024 CELASTISE. All rights reserved. Crafted with precision and passion.
            </p>
            <div className="flex items-center gap-4">
              <img src="/visa.svg" alt="Visa" className="h-6 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="/mastercard.svg" alt="Mastercard" className="h-6 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="/amex.svg" alt="American Express" className="h-6 opacity-50 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
