"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart, Shield, Clock, ArrowUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-purple-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="glass-morphism rounded-xl sm:rounded-2xl p-2 sm:p-3">
                  <Image
                    src="/logo.jpg"
                    alt="Dr. Akanksha Agarwal Logo"
                    width={150}
                    height={40}
                    className="h-6 sm:h-8 w-auto brightness-0 invert"
                  />
                </div>
              </div>
              
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                Providing compassionate, evidence-based mental health care to help you 
                achieve lasting wellness and personal growth.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
                <div className="glass-morphism rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                  <span className="text-xs sm:text-sm font-medium">Licensed Professional</span>
                </div>
                <div className="glass-morphism rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-pink-400" />
                  <span className="text-xs sm:text-sm font-medium">10+ Years Experience</span>
                </div>
                <div className="glass-morphism rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium">24/7 Support</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold gradient-text">Connect With Us</h3>
                <div className="flex gap-2 sm:gap-3">
                  {[
                    { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                    { icon: Twitter, href: "#", color: "hover:bg-sky-600" },
                    { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
                    { icon: Linkedin, href: "#", color: "hover:bg-blue-700" }
                  ].map(({ icon: Icon, href, color }, index) => (
                    <Link
                      key={index}
                      href={href}
                      className={`glass-morphism p-2 sm:p-3 rounded-lg sm:rounded-xl ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-white" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-semibold gradient-text flex items-center gap-2">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { name: "About Dr. Agarwal", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Book Appointment", href: "/appointments" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                  { name: "Emergency Resources", href: "/emergency" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:gradient-text transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
                    >
                      <div className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all duration-300"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-semibold gradient-text flex items-center gap-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                Get In Touch
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="glass-morphism rounded-lg sm:rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-400">Call or Text</p>
                      <div className="text-white hover:text-green-400 transition-colors font-medium text-sm sm:text-base">
                        <Link href="tel:+917013983168">+91 7013983168</Link>
                        <span className="text-gray-400"> | </span>
                        <Link href="tel:+918074790542">+91 8074790542</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-morphism rounded-lg sm:rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-400">Email</p>
                      <Link href="mailto:dr.akankshagarwal@outlook.com" className="text-white hover:text-blue-400 transition-colors font-medium text-sm sm:text-base break-all">
                        dr.akankshagarwal@outlook.com
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="glass-morphism rounded-lg sm:rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-400">Location</p>
                      <p className="text-white font-medium text-sm sm:text-base leading-relaxed">
                        1-2-217/14, Ground Floor<br />
                        Rajamanohar Colony, Domalguda<br />
                        Himayat Nagar, Hyderabad - 500029
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50">
            <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto text-center">
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold gradient-text">Stay Connected</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Get mental health tips, resources, and updates delivered to your inbox.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 glass-morphism rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-400 border border-gray-600/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-sm sm:text-base"
                  />
                  <Button className="btn-modern text-sm sm:text-base px-4 sm:px-6">
                    Subscribe
                    <Mail className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Dr. Akanksha Agarwal. All rights reserved.</p>
                <div className="flex gap-3 sm:gap-4">
                  <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                  <Link href="/admin" className="hover:text-purple-400 transition-colors">Admin</Link>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="text-xs sm:text-sm text-gray-400 text-center">
                  Made with <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 inline mx-1" /> for mental wellness
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 glass-morphism hover:bg-purple-600 p-2.5 sm:p-3 rounded-full shadow-2xl z-50 animate-bounce"
          size="sm"
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      )}
    </footer>
  )
}
