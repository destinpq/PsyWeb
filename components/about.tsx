"use client"

import { Award, BookOpen, Heart, Users, Shield, Star, Sparkles, ArrowRight, Brain, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

const credentials = [
  {
    icon: Award,
    title: "PsyD in Clinical Psychology",
    description: "Doctorate from a recognized institution (2024) - Licensed Clinical & Counseling Psychologist",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: BookOpen,
    title: "Specialized Certifications",
    description: "Certified in Cognitive Behavioural Therapy (CBT) and PTSD-PTMS Workshop training",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Heart,
    title: "Supervisor & Trainer",
    description: "Mindfulness & Emotional Skills Facilitator and Communication Skills Trainer",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Users,
    title: "Academic & Research",
    description: "Gold Medallist, Course Coordinator for PG Diploma in Psychological Counselling Skills",
    gradient: "from-emerald-500 to-teal-500"
  }
]

const specializations = [
  "Group Therapy",
  "Cognitive Rehabilitation", 
  "Psychodynamic Therapy",
  "Cognitive Behavioral Therapy (CBT)",
  "Mindfulness-Based Interventions",
  "Stress Management & Emotional Regulation",
  "Life Skills & Communication Workshops",
  "Corporate Mental Health Workshops"
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
    <section id="about" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center space-y-4 sm:space-y-6 mb-6 sm:mb-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 glass-morphism rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium animate-glow">
            <Brain className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
            <span className="gradient-text font-semibold">About Dr. Agarwal</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Meet Your
            <span className="block gradient-text">Mental Health Expert</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Every day holds the potential for healing and growth. Experience compassionate, 
            non-judgmental care that honors your unique journey.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-8 sm:mb-12">
          
          {/* Left Content - Professional Image */}
          <div className={`relative order-first lg:order-first ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main image container */}
              <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover-lift">
                <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <img
                    src="/logo.jpg"
                    alt="Dr. Akanksha Agarwal - Professional Portrait"
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder-user.jpg';
                    }}
                  />
                  
                  {/* Professional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent rounded-xl sm:rounded-2xl"></div>
                </div>
              </div>

              {/* Floating credential badge */}
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 glass-morphism rounded-xl sm:rounded-2xl p-3 sm:p-6 animate-float">
                <div className="text-center space-y-1 sm:space-y-2">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto">
                    <Star className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">Licensed</div>
                  <div className="text-xs text-gray-600">Professional</div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-2xl sm:rounded-3xl blur-2xl -z-10 transform -rotate-6"></div>
            </div>
          </div>

          {/* Right Content - Professional Details */}
          <div className={`space-y-6 sm:space-y-8 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            
            {/* Professional Statement */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Compassionate Care, 
                <span className="gradient-text"> Evidence-Based Results</span>
              </h3>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                <p>
                  Dedicated to providing exceptional mental health care through compassionate, 
                  evidence-based treatment approaches tailored to your unique needs. Her approach 
                  is non-judgmental, evidence-based, and deeply rooted in empathy.
                </p>
                
                <p>
                  With over a decade of experience in clinical psychology, I am passionate about 
                  helping individuals, couples, and families navigate life's challenges and 
                  achieve meaningful positive change. I serve as a Supervisor & Trainer, 
                  Academician, and Researcher in the field.
                </p>
                
                <p>
                  I specialize in psychological assessments, psychotherapy, and mental health consultations 
                  across all age groups—from pediatric to geriatric. I believe that everyone deserves 
                  access to quality mental health care.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center glass-morphism rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold gradient-text">10+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Years</div>
              </div>
              <div className="text-center glass-morphism rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold gradient-text">500+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Clients</div>
              </div>
              <div className="text-center glass-morphism rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold gradient-text">95%</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Success</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="sm" className="btn-modern group sm:size-lg" asChild>
                <Link href="/appointments">
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="sm" variant="outline" className="glass-card hover-lift border-2 border-purple-200/50 sm:size-lg" asChild>
                <Link href="/contact">
                  Learn More About My Approach
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="mb-8 sm:mb-12">
          <div className={`text-center mb-6 sm:mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Professional
              <span className="gradient-text"> Credentials & Expertise</span>
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive training and certifications in multiple therapeutic approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {credentials.map((credential, index) => {
              const Icon = credential.icon
              return (
                <div 
                  key={credential.title}
                  className={`group glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift relative overflow-hidden ${
                    isVisible ? 'stagger-animation' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${credential.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${credential.gradient} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors">
                        {credential.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {credential.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Specializations */}
        <div className={`text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Areas of
              <span className="gradient-text"> Specialization</span>
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {specializations.map((specialization, index) => (
                <div 
                  key={specialization}
                  className="glass-morphism rounded-lg sm:rounded-xl p-3 sm:p-4 hover-lift transition-all duration-300 hover:scale-105"
                >
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {specialization}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
