"use client"

import { Award, BookOpen, Heart, Users, Shield, Star, Sparkles, ArrowRight, Brain, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

const credentials = [
  {
    icon: Star,
    title: "Licensed Clinical Psychologist",
    description: "Psychological Assessment & Diagnosis (child, adolescent, adult, geriatric) • Therapeutic Interventions – CBT, client-centered, mindfulness-based, trauma-informed care • Psycho-Oncology – Specialized support for patients undergoing cancer treatment and recovery • Family & Relationship Therapy • Adolescent & Young Adult Mental Health • Grief, Stress & Adjustment Disorders",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    title: "Academician & Researcher",
    description: "Published researcher with peer-reviewed publications • Academic excellence with multiple awards • Training coordinator for counseling programs • Clinical supervision for therapists • Evidence-based practice advocate",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: BookOpen,
    title: "Supervisor & Trainer",
    description: "Seasoned supervisor and trainer with deep expertise in training psychology students, mental health professionals, educators, and volunteers across diverse populations and settings • Clinical supervision in case profiling, therapeutic intervention, and psychological assessment to postgraduate and doctoral-level psychology trainees • Training style marked by integrated blend of evidence-based practices and experiential learning with emphasis on therapeutic application, ethics, and reflective practice • Mindfulness-based emotional regulation for educators and school children • Mental health awareness sessions for community stakeholders (in collaboration with Hyderabad City Police) • Team-building and communication workshops for adolescents and volunteers • Stress management and life skills training for teachers and students • Well-being workshops for elderly populations • Anger management and self-awareness modules as part of employability and soft skills development • Associate Professor and Course Coordinator designing curriculum rooted in clinical psychology, counseling skills, and therapeutic techniques • Academic guidance extending to mentoring students in research and practicum, fostering professional competence and ethical integrity • Clinical training across premier institutions including Government Institute of Mental Health, Basavatarakam Indo-American Cancer Hospital, and Sweekaar Academy • Versatile supervision capabilities across clinical, educational, and community-based settings",
    gradient: "from-purple-500 to-indigo-500"
  }
]

const specializations = [
  {
    title: "Psychological Therapy & Counseling",
    description: "Comprehensive therapeutic interventions for individuals, couples, families, and groups across all age ranges.",
    image: "/placeholder.jpg",
    gradient: "from-blue-500 to-cyan-500",
    services: [
      "Anxiety, Depression, OCD, Trauma",
      "Grief & Loss, Adjustment Disorders",
      "Relationship Counseling",
      "Adolescent & Family Therapy",
      "Oncology-Related Psychological Support",
      "Individual Therapy",
      "Group Therapy",
      "Couples Counseling",
      "Family Counseling",
      "Wellness Coaching"
    ],
    benefits: ["Evidence-Based", "Personalized Care", "Safe Environment"]
  },
  {
    title: "Assessment & Diagnosis", 
    description: "Comprehensive psychological testing and diagnostic services for accurate assessment and treatment planning.",
    image: "/placeholder.jpg",
    gradient: "from-purple-500 to-indigo-500",
    services: [
      "IQ Testing",
      "Developmental Assessments", 
      "Personality Testing",
      "Neuropsychological Testing",
      "Diagnostic Clarification (Adults & Children)",
      "Psychoeducational Evaluations",
      "Cognitive Assessments",
      "Behavioral Evaluations"
    ],
    benefits: ["Accurate Diagnosis", "Treatment Planning", "Educational Support"]
  },
  {
    title: "Workshops & Training",
    description: "Educational programs and skill-building workshops for personal development and professional growth.",
    image: "/placeholder.jpg",
    gradient: "from-emerald-500 to-teal-500",
    services: [
      "Mindfulness-Based Interventions",
      "Stress Management & Emotional Regulation",
      "Life Skills & Communication Workshops", 
      "Teacher Training Modules",
      "Parent Training Programs",
      "Corporate Mental Health Workshops",
      "Wellness Programs",
      "Skill Development Sessions"
    ],
    benefits: ["Skill Building", "Prevention Focus", "Group Learning"]
  },
  {
    title: "Academic & Clinical Supervision",
    description: "Professional guidance and mentorship for psychology students and mental health practitioners.",
    image: "/placeholder.jpg",
    gradient: "from-rose-500 to-pink-500",
    services: [
      "Psychology Student Guidance",
      "Trainee Therapist Supervision",
      "Postgraduate Course Training",
      "Clinical Case Consultation",
      "Research Mentorship",
      "Professional Development",
      "Ethics Training",
      "Career Guidance"
    ],
    benefits: ["Expert Mentorship", "Professional Growth", "Ethical Practice"]
  }
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

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
            <span className="gradient-text font-semibold">Licensed Clinical Psychologist</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
            <span className="gradient-text">Dr. Akanksha Agarwal</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            Your Trusted
            <span className="block gradient-text">Mental Health Expert</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-3">
            Dedicated to providing exceptional mental health care through compassionate, 
            evidence-based treatment approaches tailored to your unique needs. Her approach 
            is non-judgmental, evidence-based, and deeply rooted in empathy.
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
                    src="/5.jpg"
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
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 rounded-xl sm:rounded-2xl p-3 sm:p-6 animate-float" style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
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
                  With over a decade of experience in clinical psychology, I am passionate about 
                  helping individuals, couples, and families navigate life's challenges and 
                  achieve meaningful positive change.
                </p>
                
                <p>
                  I specialize in psychological assessments, psychotherapy, and mental health consultations
                  across all age groups—from pediatric to geriatric. Whether you're navigating 
                  anxiety, dealing with life transitions, managing oncology-related distress, or seeking 
                  psychological support for your family, my clinic provides a safe, non-judgmental, and confidential space for healing.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((credential, index) => {
              const Icon = credential.icon
              return (
                <div 
                  key={credential.title}
                  className={`group glass-card rounded-2xl p-6 hover-lift relative overflow-hidden h-full flex flex-col ${
                    isVisible ? 'stagger-animation' : 'opacity-0'
                  } ${index === 2 ? 'md:col-span-2' : ''}`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${credential.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${credential.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {credential.title}
                      </h4>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                        {credential.description.split(' • ').map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
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

        {/* Published Research & Certifications */}
        <div className={`mb-8 sm:mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '1.0s' }}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 glass-morphism rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium">
              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
              <span className="gradient-text font-semibold">Published Research</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 mt-4">
              Academic
              <span className="gradient-text"> Publications & Research</span>
            </h3>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Peer-reviewed publications demonstrating commitment to evidence-based practice and research excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Publication 1 */}
            <div className="group glass-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2">
              <a 
                href="https://internationaljournalcorner.com/index.php/theijhss/article/view/127223/88088"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Family Environment and Mental Well-Being among Adolescents
                      </h4>
                      <p className="text-sm text-blue-600 font-medium">IJHSS • Authored by Dr. Akanksha Agarwal with Dr. Usha Chivukula</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Research examining the quality of relationships with parents as a major determining factor of mental well-being in adolescents. 
                      This study focuses on how family environment influences mental health outcomes in the 13-18 age group.
                    </p>
                    
                    {/* Research Preview */}
                    <div className="relative bg-white rounded-xl overflow-hidden border-2 border-gray-200 group-hover:border-blue-300 transition-all shadow-inner">
                      <div className="aspect-[4/3] p-4">
                        <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white rounded-lg border border-gray-200 flex flex-col">
                          {/* Header */}
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 text-center">
                            <p className="text-xs font-medium">THE INTERNATIONAL JOURNAL OF HUMANITIES & SOCIAL STUDIES</p>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 p-4 space-y-3">
                            <h5 className="text-lg font-bold text-gray-900 text-center leading-tight">
                              Family Environment and Mental Well-Being among Adolescents
                            </h5>
                            
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="space-y-2 text-xs">
                                <p><span className="font-semibold">Dr. Akanksha Agarwal</span> - School Counselor, Department of Psychology</p>
                                <p><span className="font-semibold">Dr. Usha Chivukula</span> - Assistant Professor, Department of Psychology</p>
                                <p className="text-gray-600">St. Francis Degree College for Women, Hyderabad, Telangana, India</p>
                              </div>
                            </div>
                            
                            <div className="text-xs text-gray-700 space-y-1">
                              <p><span className="font-semibold">Abstract:</span> The quality of relationships with parents is a major determining factor of mental well-being in adolescents...</p>
                              <p className="text-gray-500">Study examines family environment's impact on mental health outcomes among 153 adolescents aged 13-18 years.</p>
                            </div>
                            
                            <div className="flex items-center justify-center gap-2 text-xs text-blue-600">
                              <BookOpen className="h-3 w-3" />
                              <span>Click to view full research article</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span>Peer-Reviewed</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-purple-500" />
                        <span>Adolescent Psychology</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-blue-500" />
                        <span>Family Research</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200/50">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                        View Full Publication
                      </span>
                      <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              </a>
            </div>

            {/* Publication 2 */}
            <div className="group glass-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2">
              <a 
                href="https://www.worldwidejournals.com/global-journal-for-research-analysis-GJRA/file.php?val=May_2015_1432202163__149.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        Positive Psychology Interventions in Geriatrics
                      </h4>
                      <p className="text-sm text-emerald-600 font-medium">GJRA • Authored by Akanksha Agarwal with Dr. Usha Chivukula</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Research focusing on positive psychology interventions as modifiers of interpersonal needs, gerotranscendence, and well-being in geriatrics. 
                      This study explores evidence-based approaches to enhance mental health in older adults.
                    </p>
                    
                    {/* Research Preview */}
                    <div className="relative bg-white rounded-xl overflow-hidden border-2 border-gray-200 group-hover:border-emerald-300 transition-all shadow-inner">
                      <div className="aspect-[4/3] p-4">
                        <div className="w-full h-full bg-gradient-to-b from-emerald-50 to-white rounded-lg border border-gray-200 flex flex-col">
                          {/* Header */}
                          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-3 rounded-t-lg">
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-medium">Research Paper</p>
                              <p className="text-xs font-medium">Psychology</p>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 p-4 space-y-3">
                            <h5 className="text-lg font-bold text-gray-900 text-center leading-tight">
                              Positive Psychology Interventions: Modifiers of Interpersonal Needs, Gerotranscendence, and Well-Being in Geriatrics
                            </h5>
                            
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="space-y-2 text-xs">
                                <p><span className="font-semibold">Dr. Akanksha Agarwal</span> - Post Graduate Student, Department of Psychology</p>
                                <p><span className="font-semibold">Dr. Usha Chivukula</span> - Assistant Professor, Department of Psychology St. Francis College</p>
                                <p><span className="font-semibold">Tina Fernandes</span> - Assistant Professor, Head of Department</p>
                                <p className="text-gray-600">St. Francis College, Begumpet, Hyderabad</p>
                              </div>
                            </div>
                            
                            <div className="text-xs text-gray-700 space-y-1">
                              <p><span className="font-semibold">ABSTRACT:</span> The present study focuses on positive psychology interventions as modifiers of interpersonal needs, gerotranscendence and well-being...</p>
                              <p className="text-gray-500">Study examines well-being enhancement techniques for elderly populations using positive psychology approaches.</p>
                            </div>
                            
                            <div className="flex items-center justify-center gap-2 text-xs text-emerald-600">
                              <BookOpen className="h-3 w-3" />
                              <span>Click to view full research paper</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span>Research Article</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-emerald-500" />
                        <span>Geriatric Psychology</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-pink-500" />
                        <span>Positive Psychology</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200/50">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-600 font-semibold group-hover:text-emerald-800 transition-colors">
                        View Full Publication
                      </span>
                      <ArrowRight className="h-5 w-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Specializations Tabbed Interface */}
        <div className={`text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-6xl mx-auto">
            <div className="mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Areas of
                <span className="gradient-text"> Specialization</span>
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Discover my comprehensive approach to mental health through specialized therapeutic interventions
              </p>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {specializations.map((specialization, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeTab === index 
                      ? `bg-gradient-to-r ${specialization.gradient} text-white shadow-lg scale-105` 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-102'
                  }`}
                >
                  {specialization.title.replace(' & ', ' &\n')}
                </button>
              ))}
            </div>
            
            {/* Active Tab Content */}
            <div className="relative">
              {specializations.map((specialization, index) => (
                <div
                  key={index}
                                     className={`transition-all duration-500 ${
                     activeTab === index 
                       ? 'opacity-100 translate-y-0' 
                       : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                   }`}
                >
                  <div className="glass-morphism rounded-xl p-6 sm:p-8">
                    <div className="grid grid-cols-1 gap-6 sm:gap-8">
                      {/* Header Section */}
                      <div className="text-center">
                        <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${specialization.gradient} rounded-2xl mb-4`}>
                          <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                          {specialization.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                          {specialization.description}
                        </p>
                      </div>
                      
                      {/* Services Grid */}
                      <div>
                        <h5 className="text-lg font-semibold text-gray-800 mb-6 text-left">Services Offered:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {specialization.services.map((service, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors text-left">
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${specialization.gradient}`}></div>
                              <span className="text-sm font-medium text-gray-700 text-left">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Benefits & CTA */}
                      <div className="mt-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-4 text-left">Key Benefits:</h5>
                            <div className="space-y-3">
                              {specialization.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-white/50 rounded-lg text-left">
                                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${specialization.gradient} flex items-center justify-center flex-shrink-0`}>
                                    <Star className="w-3 h-3 text-white" />
                                  </div>
                                  <span className="text-sm font-medium text-gray-700">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <Button className={`w-full bg-gradient-to-r ${specialization.gradient} hover:scale-105 transition-transform`} asChild>
                              <Link href="/appointments">
                                <Calendar className="mr-2 h-4 w-4" />
                                Book Consultation
                              </Link>
                            </Button>
                            <Button variant="outline" className="w-full" asChild>
                              <Link href="/services">
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
