'use client';

import { useState } from 'react'
import Link from "next/link"
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react'
import { Button } from './ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/", active: true },
    { name: "Menu", href: "/menu"},
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/pages" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="z-50 w-full bg-[#0D0D0D] sticky top-0 px-4 sm:px-6 lg:px-[15.62%] py-4 lg:py-7">
      <nav className="flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/src/app/favicon.ico"
          className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white z-50"
        >
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          className="lg:hidden hover:text-white text-white z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Navigation Links */}
        <div className={`
          fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6
          lg:static lg:flex-row lg:bg-transparent lg:gap-[32px]
          transition-all duration-300 ease-in-out
          ${isMenuOpen 
            ? 'opacity-100 visible translate-x-0' 
            : 'opacity-0 invisible translate-x-full lg:translate-x-0 lg:opacity-100 lg:visible'}
          absolute top-0 left-0 w-full h-screen lg:h-auto
        `}>
          <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[32px]">
            {menuItems.map((item) => (
              <li key={item.name} className="w-full lg:w-auto text-center">
                <Link
                  href={item.href}
                  className={`block w-full lg:w-auto text-[16px] leading-6 ${
                    item.active ? "text-[#FF9F0D] font-bold" : "text-white"
                  } font-inter hover:text-[#FF9F0D] transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Icons */}
          <div className="lg:hidden flex items-center gap-4 mt-6">
            <Link href="#" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="Search">
              <Search size={24} />
            </Link>
            <Link href="/signup" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="User Profile">
              <User size={24} />
            </Link>
            <Link href="/cart" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="Shopping Cart">
              <ShoppingCart size={24} />
            </Link>
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="#" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="Search">
            <Search size={24} />
          </Link>
          <Link href="/signup" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="User Profile">
            <User size={24} />
          </Link>
          <Link href="/cart" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="Shopping Cart">
            <ShoppingCart size={24} />
          </Link>
        </div>
      </nav>
    </header>
  )
}