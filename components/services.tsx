"use client"

import { Brain, Heart, Users, Shield, MessageCircle, Calendar, Star, ArrowRight, Zap, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const services = [
  {
    icon: Brain,
    title: "Psychological Therapy & Counseling",
    description: "Comprehensive therapy for anxiety, depression, OCD, trauma, grief, and adjustment disorders.",
    features: ["Individual Therapy", "Group Therapy", "Couples Counseling", "Family Counseling"],
    price: "Contact for consultation",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "Specialized Support Services",
    description: "Targeted support for adolescents, families, and oncology-related psychological care.",
    features: ["Adolescent & Family Therapy", "Oncology Support", "Relationship Counseling", "Wellness Coaching"],
    price: "Customized packages",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Users,
    title: "Assessment & Diagnosis",
    description: "Comprehensive psychological testing and diagnostic clarification for all age groups.",
    features: ["IQ & Personality Testing", "Neuropsychological Testing", "Psychoeducational Evaluations", "Diagnostic Clarification"],
    price: "Assessment packages available",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Shield,
    title: "Workshops & Training",
    description: "Professional development workshops and training modules for various groups.",
    features: ["Mindfulness-Based Interventions", "Stress Management Training", "Communication Workshops", "Corporate Mental Health"],
    price: "Group rates available",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: MessageCircle,
    title: "Academic & Clinical Supervision",
    description: "Guidance and supervision for psychology students and trainee therapists.",
    features: ["Student Supervision", "Training Modules", "Postgraduate Courses", "Professional Development"],
    price: "Contact for details",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Calendar,
    title: "Life Skills & Communication",
    description: "Specialized workshops for teachers, parents, and professionals to enhance communication skills.",
    features: ["Teacher Training Modules", "Parent Training", "Life Skills Development", "Communication Enhancement"],
    price: "Workshop packages",
    gradient: "from-violet-500 to-purple-500"
  }
]

export function Services() {
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

    const section = document.getElementById('services')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 glass-morphism rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
            <span className="gradient-text font-semibold">Professional Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Comprehensive
            <span className="block gradient-text">Mental Health Care</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Evidence-based therapeutic approaches tailored to your unique needs, 
            helping you achieve lasting positive change and mental wellness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={service.title}
                className={`group card-modern hover-lift relative overflow-hidden ${
                  isVisible ? 'stagger-animation' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10 space-y-4 sm:space-y-6 p-4 sm:p-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                        <span className="text-xs sm:text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 group-hover:border-purple-100 transition-colors">
                    <div className="text-sm sm:text-base lg:text-lg font-bold gradient-text">
                      {service.price}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 group/btn text-xs sm:text-sm"
                      asChild
                    >
                      <Link href="/appointments">
                        Book Now
                        <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>

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
