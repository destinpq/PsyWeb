'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Heart, 
  Clock, 
  Users, 
  Calendar, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Lightbulb,
  Shield,
  Star
} from "lucide-react"
import Link from "next/link"
import { api } from '@/lib/api'

interface Service {
  id: string
  name: string
  description: string
  shortDescription: string
  duration: number
  price: number
  features: string[]
  category: string
  isActive: boolean
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const data = await api.getServices()
      setServices(data.filter(service => service.isActive))
    } catch (error) {
      console.error('Error fetching services:', error)
      // Fallback to default services if API fails
      setServices(defaultServices)
    } finally {
      setLoading(false)
    }
  }

  const defaultServices: Service[] = [
    {
      id: '1',
      name: 'Individual Therapy',
      description: 'One-on-one therapeutic sessions focused on your personal mental health journey. Using evidence-based approaches to address anxiety, depression, trauma, and other mental health concerns.',
      shortDescription: 'Personalized one-on-one therapy sessions',
      duration: 60,
      price: 150,
      features: [
        'Personalized treatment plan',
        'Evidence-based approaches',
        'Confidential environment',
        'Flexible scheduling',
        'Progress tracking'
      ],
      category: 'individual',
      isActive: true
    },
    {
      id: '2',
      name: 'Couples Therapy',
      description: 'Relationship counseling for couples looking to improve communication, resolve conflicts, and strengthen their bond. Addressing relationship dynamics and building healthier connections.',
      shortDescription: 'Relationship counseling for couples',
      duration: 75,
      price: 200,
      features: [
        'Communication improvement',
        'Conflict resolution',
        'Relationship dynamics',
        'Trust building',
        'Intimacy enhancement'
      ],
      category: 'couples',
      isActive: true
    },
    {
      id: '3',
      name: 'Family Therapy',
      description: 'Family counseling sessions to address family dynamics, improve communication, and resolve conflicts within the family system. Creating healthier family relationships.',
      shortDescription: 'Family counseling and dynamics',
      duration: 90,
      price: 250,
      features: [
        'Family dynamics assessment',
        'Communication strategies',
        'Conflict mediation',
        'Parenting support',
        'Family healing'
      ],
      category: 'family',
      isActive: true
    },
    {
      id: '4',
      name: 'Group Therapy',
      description: 'Therapeutic group sessions focusing on specific issues like anxiety, depression, or addiction recovery. Benefit from shared experiences and peer support.',
      shortDescription: 'Therapeutic group sessions',
      duration: 90,
      price: 75,
      features: [
        'Peer support',
        'Shared experiences',
        'Cost-effective',
        'Social skills',
        'Group dynamics'
      ],
      category: 'group',
      isActive: true
    },
    {
      id: '5',
      name: 'Initial Consultation',
      description: 'Comprehensive intake session to assess your mental health needs, discuss treatment options, and create a personalized therapy plan.',
      shortDescription: 'Comprehensive mental health assessment',
      duration: 90,
      price: 100,
      features: [
        'Mental health assessment',
        'Treatment planning',
        'Goal setting',
        'Question answering',
        'Therapy matching'
      ],
      category: 'consultation',
      isActive: true
    },
    {
      id: '6',
      name: 'Online Therapy',
      description: 'Virtual therapy sessions conducted through secure video platforms. Access mental health care from the comfort of your home with the same quality as in-person sessions.',
      shortDescription: 'Secure virtual therapy sessions',
      duration: 60,
      price: 130,
      features: [
        'Convenient access',
        'Secure video platform',
        'Same quality care',
        'Flexible timing',
        'No travel required'
      ],
      category: 'online',
      isActive: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services', icon: Heart },
    { id: 'individual', name: 'Individual', icon: Users },
    { id: 'couples', name: 'Couples', icon: Heart },
    { id: 'family', name: 'Family', icon: Users },
    { id: 'group', name: 'Group', icon: Users },
    { id: 'consultation', name: 'Consultation', icon: Brain },
    { id: 'online', name: 'Online', icon: Lightbulb }
  ]

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory)

  const getCategoryIcon = (category: string) => {
    const categoryItem = categories.find(cat => cat.id === category)
    return categoryItem ? categoryItem.icon : Heart
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Professional Mental Health Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Therapy Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mental health services tailored to meet your unique needs. 
            From individual therapy to family counseling, we're here to support your journey to wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Path to Wellness</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select from our range of evidence-based therapeutic services designed to address 
              various mental health concerns and life challenges.
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => {
                  const IconComponent = getCategoryIcon(service.category)
                  return (
                    <Card key={service.id} className="hover:shadow-lg transition-shadow group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <IconComponent className="h-8 w-8 text-blue-600" />
                          <Badge variant="secondary">{service.category}</Badge>
                        </div>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {service.shortDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {service.duration} minutes
                          </div>
                          <div className="text-lg font-semibold text-blue-600">
                            ${service.price}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">What's Included:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                            {service.features.length > 3 && (
                              <li className="text-sm text-gray-500 ml-5">
                                +{service.features.length - 3} more features
                              </li>
                            )}
                          </ul>
                        </div>

                        <Button className="w-full group-hover:bg-blue-700" asChild>
                          <Link href={`#contact?service=${service.id}`}>
                            Book This Service
                            <Calendar className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine professional expertise with compassionate care to provide 
              the highest quality mental health services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Licensed Professional",
                description: "Certified clinical psychologist with extensive training"
              },
              {
                icon: Heart,
                title: "Compassionate Care",
                description: "Warm, non-judgmental environment for healing"
              },
              {
                icon: Brain,
                title: "Evidence-Based",
                description: "Using proven therapeutic methods and techniques"
              },
              {
                icon: Star,
                title: "Personalized Approach",
                description: "Treatment plans tailored to your unique needs"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Begin Your Mental Health Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step towards better mental health. Book your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">
                Learn More About Dr. Agarwal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 