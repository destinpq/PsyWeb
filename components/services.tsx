"use client"

import { Brain, Heart, Users, Shield, MessageCircle, Calendar, Star, ArrowRight, Zap, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const services = [
  {
    icon: Brain,
    title: "Psychological Therapy & Counseling",
    description: "Comprehensive therapeutic interventions for individuals, couples, families, and groups across all age ranges.",
    features: [
      "Individual Therapy", 
      "Couples Counseling", 
      "Family Counseling", 
      "Group Therapy",
      "Anxiety Treatment",
      "Depression Counseling", 
      "OCD Therapy",
      "Trauma Recovery",
      "Grief & Loss Support",
      "Adjustment Disorders",
      "Relationship Counseling",
      "Adolescent & Family Therapy",
      "Oncology-Related Psychological Support",
      "Wellness Coaching"
    ],
    price: "Contact for consultation",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Assessment & Diagnosis",
    description: "Comprehensive psychological testing and diagnostic services for accurate assessment and treatment planning.",
    features: [
      "IQ Testing",
      "Developmental Assessments", 
      "Personality Testing",
      "Neuropsychological Testing",
      "Diagnostic Clarification (Adults & Children)",
      "Psychoeducational Evaluations",
      "Cognitive Assessments",
      "Behavioral Evaluations"
    ],
    price: "Assessment packages available",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Shield,
    title: "Workshops & Training",
    description: "Educational programs and skill-building workshops for personal development and professional growth.",
    features: [
      "Mindfulness-Based Interventions",
      "Stress Management & Emotional Regulation",
      "Life Skills & Communication Workshops", 
      "Teacher Training Modules",
      "Parent Training Programs",
      "Corporate Mental Health Workshops",
      "Wellness Programs",
      "Professional Development Sessions"
    ],
    price: "Group rates available",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: MessageCircle,
    title: "Academic & Clinical Supervision",
    description: "Professional guidance and mentorship for psychology students and mental health practitioners.",
    features: [
      "Psychology Student Guidance",
      "Trainee Therapist Supervision",
      "Postgraduate Course Training",
      "Clinical Case Consultation",
      "Research Mentorship",
      "Professional Development",
      "Ethics Training",
      "Career Guidance"
    ],
    price: "Contact for details",
    gradient: "from-orange-500 to-red-500"
  }
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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

    const section = document.getElementById('services')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}


        {/* CTA Section */}
        <div className={`text-center space-y-4 sm:space-y-6 lg:space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 glass-morphism rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700">Ready to Start?</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Take the First Step Towards
                <span className="block gradient-text">Better Mental Health</span>
              </h3>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Book a free consultation to discuss your needs and find the right treatment approach for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="sm" className="btn-modern group sm:size-lg" asChild>
                  <Link href="/appointments">
                    <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="sm" variant="outline" className="glass-card hover-lift border-2 border-purple-200/50 sm:size-lg" asChild>
                  <Link href="/contact">
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Ask Questions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="text-center space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">10+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">500+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Clients Helped</div>
          </div>
          <div className="text-center space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">95%</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Success Rate</div>
          </div>
          <div className="text-center space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">24/7</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
