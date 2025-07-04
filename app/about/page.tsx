'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Award, Users, Clock, CheckCircle, ArrowRight, Calendar, Star, BookOpen, Brain, Sparkles, Target, Shield, Zap, Lightbulb, Globe, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)

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

    const section = document.getElementById('about-page')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const achievements = [
    { icon: Users, number: "500+", label: "Clients Helped", gradient: "from-blue-500 to-cyan-500", delay: "0.1s" },
    { icon: Clock, number: "10+", label: "Years Experience", gradient: "from-purple-500 to-indigo-500", delay: "0.2s" },
    { icon: Award, number: "15+", label: "Certifications", gradient: "from-emerald-500 to-teal-500", delay: "0.3s" },
    { icon: Heart, number: "98%", label: "Success Rate", gradient: "from-rose-500 to-pink-500", delay: "0.4s" }
  ]

  const qualifications = [
    { text: "Psy. D. in Clinical Psychology", icon: Brain, gradient: "from-blue-500 to-cyan-500" },
    { text: "Licensed Clinical Psychologist", icon: Shield, gradient: "from-emerald-500 to-teal-500" },
    { text: "Master's in Counseling Psychology", icon: BookOpen, gradient: "from-purple-500 to-indigo-500" },
    { text: "Certified CBT Therapist", icon: Target, gradient: "from-rose-500 to-pink-500" },
    { text: "Trauma-Informed Care Specialist", icon: Heart, gradient: "from-orange-500 to-red-500" },
    { text: "Mindfulness-Based Therapy Certified", icon: Sparkles, gradient: "from-violet-500 to-purple-500" }
  ]

  const specializations = [
    { text: "Anxiety & Depression", icon: Brain, color: "bg-blue-100 text-blue-800" },
    { text: "Trauma & PTSD", icon: Shield, color: "bg-purple-100 text-purple-800" },
    { text: "Relationship Issues", icon: Heart, color: "bg-rose-100 text-rose-800" },
    { text: "Stress Management", icon: Zap, color: "bg-emerald-100 text-emerald-800" },
    { text: "Eating Disorders", icon: Target, color: "bg-orange-100 text-orange-800" },
    { text: "Addiction Recovery", icon: Trophy, color: "bg-indigo-100 text-indigo-800" }
  ]

  const philosophyItems = [
    {
      icon: CheckCircle,
      title: "Evidence-Based Care",
      description: "Using proven therapeutic methods backed by research and clinical studies",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Working together as partners to set and achieve your mental health goals",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Globe,
      title: "Cultural Sensitivity",
      description: "Respecting and honoring diverse backgrounds, experiences, and perspectives",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Lightbulb,
      title: "Holistic Wellness",
      description: "Addressing the interconnected nature of mind, body, and spirit",
      gradient: "from-rose-500 to-pink-500"
    }
  ]

  return (
    <div id="about-page" className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,182,193,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 glass-morphism rounded-full px-6 py-3 text-sm font-medium animate-bounce">
                <Star className="h-4 w-4 text-amber-500" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  Licensed Clinical Psychologist
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                About
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ height: '160px' }}>
                  Dr. Akanksha Agarwal
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Dedicated to providing compassionate, evidence-based mental health care 
                to help individuals overcome challenges and achieve lasting emotional wellness.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white border-0 px-8 py-6 text-lg font-semibold rounded-2xl"
                  asChild
                >
                  <Link href="/appointments">
                    <Calendar className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Book Consultation
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass-card border-2 border-purple-200/50 hover:border-purple-300 text-purple-700 hover:text-purple-800 hover:bg-purple-50/50 px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-sm"
                  asChild
                >
                  <Link href="/services">
                    Learn More
                    <ArrowRight className="ml-3 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative glass-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <Image
                      src="/16.jpg"
                      alt="Dr. Akanksha Agarwal"
                      width={400}
                      height={500}
                      className="rounded-2xl object-cover w-full h-full"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder-user.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent rounded-2xl"></div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Akanksha Agarwal</h3>
                    <p className="text-lg text-gray-600 mb-4">Licensed Clinical Psychologist & Therapist</p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center animate-bounce shadow-lg">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center animate-pulse shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_70%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Proven
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Years of dedication to transforming lives through compassionate mental health care
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((item, index) => (
              <Card 
                key={index} 
                className={`text-center group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 glass-card backdrop-blur-sm ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: item.delay }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.number}
                  </div>
                  <div className="text-gray-600 font-medium">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-purple-50/20 to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Main Content */}
            <div className={`lg:col-span-2 space-y-12 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="glass-card rounded-3xl p-8 lg:p-12 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">My Approach to Mental Health</h2>
                </div>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    With over <span className="font-semibold text-purple-600">10 years of experience</span> in clinical psychology, I believe in a holistic, 
                    person-centered approach to mental health. Every individual's journey is unique, 
                    and I work collaboratively with my clients to develop personalized treatment plans 
                    that address their specific needs and goals.
                  </p>
                  <p className="text-lg">
                    My practice integrates <span className="font-semibold text-blue-600">evidence-based therapies</span> including Cognitive Behavioral Therapy (CBT), 
                    Dialectical Behavior Therapy (DBT), and mindfulness-based interventions. I create a 
                    safe, non-judgmental space where clients can explore their thoughts, feelings, and 
                    behaviors while developing healthy coping strategies.
                  </p>
                  <p className="text-lg">
                    I am passionate about helping individuals overcome anxiety, depression, trauma, 
                    relationship challenges, and other mental health concerns. My goal is to <span className="font-semibold text-emerald-600">empower 
                    clients</span> with the tools and insights needed to lead fulfilling, balanced lives.
                  </p>
                </div>
              </div>

              {/* Philosophy Section */}
              <div className="glass-card rounded-3xl p-8 lg:p-12 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Professional Philosophy</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {philosophyItems.map((item, index) => (
                    <div 
                      key={index}
                      className="group p-6 rounded-2xl bg-white/50 border border-white/20 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Sidebar */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              
              {/* Qualifications Card */}
              <Card className="glass-card border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pb-6">
                  <CardTitle className="flex items-center text-xl">
                    <Award className="h-6 w-6 mr-3" />
                    Professional Qualifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {qualifications.map((qual, index) => (
                      <div key={index} className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                        <div className={`w-8 h-8 bg-gradient-to-br ${qual.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <qual.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                          {qual.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specializations Card */}
              <Card className="glass-card border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white pb-6">
                  <CardTitle className="flex items-center text-xl">
                    <Heart className="h-6 w-6 mr-3" />
                    Areas of Specialization
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3">
                    {specializations.map((spec, index) => (
                      <div key={index} className="group">
                        <Badge 
                          className={`${spec.color} border-0 px-4 py-2 text-sm font-medium rounded-full hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md`}
                        >
                          <spec.icon className="h-3 w-3 mr-2" />
                          {spec.text}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="glass-card border-0 shadow-xl rounded-3xl overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Take the first step towards better mental health and emotional wellness today.
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 border-0 text-white font-semibold py-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <Link href="/appointments">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Consultation
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slide-right 0.8s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slide-left 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  )
} 