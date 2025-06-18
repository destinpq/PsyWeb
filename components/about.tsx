"use client"

import { Award, BookOpen, Heart, Users, Shield, Star, Sparkles, ArrowRight, Brain, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

const credentials = [
  {
    icon: Award,
    title: "Licensed Psychologist",
    description: "State Licensed Clinical Psychologist with specialization in evidence-based therapies",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: BookOpen,
    title: "Advanced Education",
    description: "PsyD in Clinical Psychology from prestigious accredited institution",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Trauma-informed approach with focus on building therapeutic relationships",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Users,
    title: "10+ Years Experience",
    description: "Extensive experience treating anxiety, depression, trauma, and relationship issues",
    gradient: "from-emerald-500 to-teal-500"
  }
]

const specializations = [
  "Cognitive Behavioral Therapy (CBT)",
  "Dialectical Behavior Therapy (DBT)", 
  "Trauma-Focused Therapy",
  "Mindfulness-Based Interventions",
  "Couples & Relationship Therapy",
  "Anxiety & Depression Treatment",
  "Crisis Intervention",
  "Adolescent & Adult Therapy"
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('about')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section-modern bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center space-y-6 mb-20 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 glass-morphism rounded-full px-6 py-3 text-sm font-medium animate-glow">
            <Brain className="h-4 w-4 text-purple-500" />
            <span className="gradient-text font-semibold">About Dr. Agarwal</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Meet Your
            <span className="block gradient-text">Mental Health Expert</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated to providing exceptional mental health care through compassionate, 
            evidence-based treatment approaches tailored to your unique needs.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content - Professional Image */}
          <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main image container */}
              <div className="glass-card rounded-3xl p-8 hover-lift">
                <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=480"
                    alt="Dr. Akanksha Agarwal - Professional Portrait"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Professional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Floating credential badge */}
              <div className="absolute -top-6 -right-6 glass-morphism rounded-2xl p-6 animate-float">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-900">Licensed</div>
                  <div className="text-xs text-gray-600">Professional</div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-3xl blur-2xl -z-10 transform -rotate-6"></div>
            </div>
          </div>

          {/* Right Content - Professional Details */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            
            {/* Professional Statement */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Compassionate Care, 
                <span className="gradient-text"> Evidence-Based Results</span>
              </h3>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  With over a decade of experience in clinical psychology, I am passionate about 
                  helping individuals, couples, and families navigate life's challenges and achieve 
                  meaningful positive change.
                </p>
                
                <p>
                  My approach combines evidence-based therapeutic techniques with genuine compassion, 
                  creating a safe and supportive environment where healing can flourish. I believe 
                  that everyone deserves access to quality mental health care.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center glass-morphism rounded-xl p-4">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-600 font-medium">Years</div>
              </div>
              <div className="text-center glass-morphism rounded-xl p-4">
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-600 font-medium">Clients</div>
              </div>
              <div className="text-center glass-morphism rounded-xl p-4">
                <div className="text-2xl font-bold gradient-text">95%</div>
                <div className="text-sm text-gray-600 font-medium">Success</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-modern group" asChild>
                <Link href="/appointments">
                  <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="glass-card hover-lift border-2 border-purple-200/50" asChild>
                <Link href="/contact">
                  Learn More About My Approach
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="mb-20">
          <div className={`text-center space-y-4 mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Professional 
              <span className="gradient-text"> Credentials & Expertise</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Committed to maintaining the highest standards of professional excellence and continuing education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => {
              const Icon = credential.icon
              return (
                <div 
                  key={credential.title}
                  className={`group card-modern hover-lift relative overflow-hidden ${
                    isVisible ? 'stagger-animation' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${credential.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <div className="relative">
                      <div className={`w-14 h-14 bg-gradient-to-br ${credential.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${credential.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {credential.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {credential.description}
                      </p>
                    </div>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Specializations Section */}
        <div className={`glass-card rounded-3xl p-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 glass-morphism rounded-full px-4 py-2">
                <Sparkles className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-semibold text-gray-700">Therapeutic Specializations</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900">
                Evidence-Based 
                <span className="gradient-text"> Treatment Approaches</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {specializations.map((specialization, index) => (
                <div 
                  key={index}
                  className="glass-morphism rounded-xl p-4 hover-lift group"
                  style={{ animationDelay: `${1.4 + index * 0.05}s` }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                      {specialization}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="pt-8">
              <Button size="lg" className="btn-modern group" asChild>
                <Link href="/services">
                  Explore All Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
