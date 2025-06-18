"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, Award, Heart, Brain, Shield, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-100/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 glass-morphism rounded-full px-4 py-2 text-sm font-medium animate-glow">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span className="gradient-text font-semibold">Licensed Mental Health Professional</span>
            </div>

            {/* Main heading with gradient text */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 stagger-animation">Dr. Akanksha</span>
                <span className="block gradient-text stagger-animation">Agarwal</span>
                <span className="block text-3xl lg:text-4xl text-gray-600 font-medium mt-4 stagger-animation">
                  PsyD, Licensed Psychologist
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light stagger-animation">
                Transforming minds through 
                <span className="gradient-text font-semibold"> compassionate </span>
                and evidence-based psychological care. Your journey to 
                <span className="gradient-text font-semibold"> mental wellness </span>
                starts here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 stagger-animation">
              <Button size="lg" className="btn-modern group" asChild>
                <Link href="/appointments">
                  <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Book Your Session
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="glass-card hover-lift border-2 border-purple-200/50 hover:border-purple-300/70" asChild>
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Free Consultation
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 stagger-animation">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center animate-float">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 font-medium">Lives Transformed</div>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600 font-medium">Confidential</div>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Image Section */}
          <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main image container */}
              <div className="relative z-10 glass-card rounded-3xl p-8 hover-lift">
                <div className="aspect-square bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=500&width=500"
                    alt="Dr. Akanksha Agarwal - Professional Psychologist"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Floating cards - Removed the problematic green brain icon */}

              <div className="absolute -bottom-6 -right-6 glass-morphism rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Flexible</div>
                    <div className="text-xs text-gray-600">Online & In-person</div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-3xl blur-2xl -z-10 transform rotate-6"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}
