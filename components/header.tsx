"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
              <span className="text-2xl">🌱</span>
            </div>
            <span className="font-display text-2xl font-bold text-foreground">Zerowasteri</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#shop" className="font-body text-foreground/80 hover:text-accent transition-colors">
              Shop
            </a>
            <a href="#about" className="font-body text-foreground/80 hover:text-accent transition-colors">
              About
            </a>
            <a href="#impact" className="font-body text-foreground/80 hover:text-accent transition-colors">
              Our Impact
            </a>
            <a href="#blog" className="font-body text-foreground/80 hover:text-accent transition-colors">
              Blog
            </a>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <a
                href="#shop"
                className="font-body text-foreground/80 hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </a>
              <a
                href="#about"
                className="font-body text-foreground/80 hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#impact"
                className="font-body text-foreground/80 hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Impact
              </a>
              <a
                href="#blog"
                className="font-body text-foreground/80 hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <button className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-opacity w-fit">
                <ShoppingBag size={18} />
                <span className="font-medium">Cart (0)</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
