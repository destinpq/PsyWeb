"use client"

import { Brain, Heart, Users, Shield, MessageCircle, Calendar, Star, ArrowRight, Zap, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    description: "One-on-one sessions tailored to your unique needs and goals for personal growth and healing.",
    features: ["Cognitive Behavioral Therapy", "Mindfulness-Based Approaches", "Trauma-Informed Care"],
    price: "Starting at $120/session",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "Couples Counseling",
    description: "Strengthen your relationship through evidence-based therapy techniques and improved communication.",
    features: ["Communication Skills", "Conflict Resolution", "Intimacy Building"],
    price: "Starting at $160/session",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Users,
    title: "Group Therapy",
    description: "Connect with others facing similar challenges in a supportive and structured environment.",
    features: ["Support Groups", "Skills Training", "Peer Connection"],
    price: "Starting at $60/session",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Shield,
    title: "Anxiety & Depression",
    description: "Specialized treatment for anxiety disorders, depression, and mood-related concerns.",
    features: ["Evidence-Based Treatment", "Coping Strategies", "Long-term Support"],
    price: "Starting at $120/session",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: MessageCircle,
    title: "Crisis Intervention",
    description: "Immediate support and intervention for mental health crises and urgent situations.",
    features: ["24/7 Support", "Crisis Planning", "Emergency Resources"],
    price: "Contact for pricing",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Calendar,
    title: "Wellness Coaching",
    description: "Proactive approach to mental wellness with lifestyle coaching and preventive strategies.",
    features: ["Lifestyle Optimization", "Stress Management", "Personal Development"],
    price: "Starting at $100/session",
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
    <section id="services" className="section-modern bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center space-y-6 mb-20 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 glass-morphism rounded-full px-6 py-3 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-purple-500" />
            <span className="gradient-text font-semibold">Professional Services</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Comprehensive
            <span className="block gradient-text">Mental Health Care</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Evidence-based therapeutic approaches tailored to your unique needs, 
            helping you achieve lasting positive change and mental wellness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-purple-100 transition-colors">
                    <div className="text-lg font-bold gradient-text">
                      {service.price}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 group/btn"
                      asChild
                    >
                      <Link href="/appointments">
                        Book Now
                        <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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
        <div className={`text-center space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 glass-morphism rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-700">Ready to Start?</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Take the First Step Towards
                <span className="block gradient-text">Better Mental Health</span>
              </h3>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Book a free consultation to discuss your needs and find the right treatment approach for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-modern group" asChild>
                  <Link href="/appointments">
                    <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="glass-card hover-lift border-2 border-purple-200/50" asChild>
                  <Link href="/contact">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Ask Questions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text">10+</div>
            <div className="text-sm text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text">500+</div>
            <div className="text-sm text-gray-600 font-medium">Clients Helped</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text">95%</div>
            <div className="text-sm text-gray-600 font-medium">Success Rate</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text">24/7</div>
            <div className="text-sm text-gray-600 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
