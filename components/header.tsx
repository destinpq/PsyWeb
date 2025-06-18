"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Calendar, Phone, ArrowRight, Sparkles, Brain } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-card border-b border-white/20 shadow-xl' 
        : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-lg p-2 hover-lift">
                  <Image
                    src="/logo.jpg"
                    alt="Dr. Akanksha Agarwal's Mental Healthcare Clinic Logo"
                    width={240}
                    height={60}
                    priority
                    className="h-14 w-auto"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-800 hover:bg-purple-50" asChild>
              <Link href="/login">
                Login
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="glass-morphism border-purple-200/50 hover:border-purple-300 group" asChild>
              <Link href="tel:+15551234567">
                <Phone className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                Call Now
              </Link>
            </Button>
            <Button size="sm" className="btn-modern group" asChild>
              <Link href="/appointments">
                <Calendar className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                Book Session
                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="glass-morphism hover:bg-purple-50/50 group"
            >
              <div className="relative">
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700 group-hover:text-purple-600 transition-colors" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 group-hover:text-purple-600 transition-colors" />
                )}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100 py-6' 
            : 'max-h-0 opacity-0 py-0'
        } overflow-hidden`}>
          <div className="glass-card rounded-2xl p-6 space-y-4">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-purple-600 font-medium rounded-xl hover:bg-purple-50/50 transition-all duration-300 group stagger-animation"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            ))}
            
            <div className="pt-4 space-y-3 border-t border-purple-100">
              <Button variant="ghost" size="sm" className="w-full text-purple-600 hover:text-purple-800 hover:bg-purple-50 stagger-animation" asChild style={{ animationDelay: '0.4s' }}>
                <Link href="/login">
                  Login / Register
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full glass-morphism border-purple-200/50 hover:border-purple-300 group stagger-animation" asChild style={{ animationDelay: '0.5s' }}>
                <Link href="tel:+15551234567">
                  <Phone className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Call Now
                </Link>
              </Button>
              <Button size="sm" className="w-full btn-modern group stagger-animation" asChild style={{ animationDelay: '0.6s' }}>
                <Link href="/appointments">
                  <Calendar className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Book Your Session
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Badge - Removed the problematic badge */}
          </div>
        </div>
      </nav>
    </header>
  )
}
