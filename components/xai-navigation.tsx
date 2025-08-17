"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function XenAINavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <Image
                src="/images/xen-logo.jpeg"
                alt="XEN Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-white font-bold text-xl">XenAI</span>
              <span className="text-green-400 text-sm font-medium">XLayer Chain</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="https://x.com/XenAI_XLayer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-green-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <Link href="/about" className="text-white/90 hover:text-green-300 transition-colors font-medium">
              About
            </Link>
            <Link href="/tokenomics" className="text-white/90 hover:text-green-300 transition-colors font-medium">
              Tokenomics
            </Link>
            <Link href="/roadmap" className="text-white/90 hover:text-green-300 transition-colors font-medium">
              Roadmap
            </Link>
            <Link href="/whitepaper" className="text-white/90 hover:text-green-300 transition-colors font-medium">
              Whitepaper
            </Link>
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Launch App
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href="https://x.com/XenAI_XLayer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-green-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/90 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/70 backdrop-blur-sm rounded-lg mt-2 border border-green-500/30">
              <Link
                href="/about"
                className="block px-3 py-2 text-white/90 hover:text-green-300 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="/tokenomics"
                className="block px-3 py-2 text-white/90 hover:text-green-300 transition-colors font-medium"
              >
                Tokenomics
              </Link>
              <Link
                href="/roadmap"
                className="block px-3 py-2 text-white/90 hover:text-green-300 transition-colors font-medium"
              >
                Roadmap
              </Link>
              <Link
                href="/whitepaper"
                className="block px-3 py-2 text-white/90 hover:text-green-300 transition-colors font-medium"
              >
                Whitepaper
              </Link>
              <div className="px-3 py-2">
                <Button
                  size="sm"
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-lg transition-all duration-300 shadow-lg"
                >
                  Launch App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
