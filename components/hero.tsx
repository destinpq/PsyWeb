"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, Award, Heart, Shield, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] lg:min-h-[100vh] bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-100/20 overflow-hidden py-8 md:py-12 lg:py-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-0 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            
          {/* Left Content */}
          <div className={`space-y-4 sm:space-y-6 mx-auto lg:mx-0 max-w-md lg:max-w-lg ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 glass-morphism rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium animate-glow">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
              <span className="gradient-text font-semibold">Licensed Mental Health Professional</span>
            </div>

            {/* Main heading with gradient text */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="block text-gray-900 stagger-animation">Dr. Akanksha</span>
                <span className="block gradient-text stagger-animation">Agarwal</span>
                <span className="block text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-medium mt-2 sm:mt-4 stagger-animation">
                  PsyD, Licensed Clinical Psychologist
                </span>
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-light stagger-animation">
                Every day holds the potential for healing and growth. Experience 
                <span className="gradient-text font-semibold"> compassionate </span>
                non-judgmental care that 
                <span className="gradient-text font-semibold"> honors </span>
                your unique journey. Your journey to mental wellness starts here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 stagger-animation">
              <Button size="sm" className="btn-modern group sm:size-lg" asChild>
                <Link href="/appointments">
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
                  Book Your Session
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-4 sm:pt-6 stagger-animation">
              <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center animate-float">
                  <Award className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-gray-900">10+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Heart className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-gray-900">500+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">Lives Transformed</div>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-gray-900">100%</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">Confidential</div>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Image Section */}
          <div className={`relative order-first lg:order-last mb-6 lg:mb-0 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main image container */}
              <div className="relative z-10">
                <div className="rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[36em] mx-auto">
                  <Image
                    src="/1.jpg" 
                    alt="Dr. Akanksha Agarwal - Professional Psychologist"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, (max-width: 1024px) 50vw, 40vw"
                    priority
                    className="object-cover object-center rounded-xl sm:rounded-2xl"
                    onError={(e) => {
                      console.log('Image failed to load:', e);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent rounded-xl sm:rounded-2xl"></div>
                </div>
              </div>

             
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-2xl sm:rounded-3xl blur-2xl -z-10 transform rotate-6 scale-105"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-[10%] right-[10%] w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-[20%] left-[10%] w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[20%] left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}
