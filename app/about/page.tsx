'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Award, Users, Clock, CheckCircle, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const achievements = [
    { icon: Users, number: "500+", label: "Clients Helped" },
    { icon: Clock, number: "10+", label: "Years Experience" },
    { icon: Award, number: "15+", label: "Certifications" },
    { icon: Heart, number: "98%", label: "Success Rate" }
  ]

  const qualifications = [
    "Ph.D. in Clinical Psychology",
    "Master's in Counseling Psychology",
    "Licensed Clinical Psychologist",
    "Certified CBT Therapist",
    "Trauma-Informed Care Specialist",
    "Mindfulness-Based Therapy Certified"
  ]

  const specializations = [
    "Anxiety & Depression",
    "Trauma & PTSD",
    "Relationship Issues",
    "Stress Management",
    "Eating Disorders",
    "Addiction Recovery"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Licensed Clinical Psychologist
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About Dr. Akanksha Agarwal
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dedicated to providing compassionate, evidence-based mental health care 
                to help individuals overcome challenges and achieve emotional wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#services">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <Image
                  src="/doctor-portrait.jpg"
                  alt="Dr. Akanksha Agarwal"
                  width={400}
                  height={500}
                  className="rounded-lg object-cover w-full h-96"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">Dr. Akanksha Agarwal</h3>
                  <p className="text-gray-600">Clinical Psychologist & Therapist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{item.number}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Approach to Mental Health</h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    With over 10 years of experience in clinical psychology, I believe in a holistic, 
                    person-centered approach to mental health. Every individual's journey is unique, 
                    and I work collaboratively with my clients to develop personalized treatment plans 
                    that address their specific needs and goals.
                  </p>
                  <p>
                    My practice integrates evidence-based therapies including Cognitive Behavioral Therapy (CBT), 
                    Dialectical Behavior Therapy (DBT), and mindfulness-based interventions. I create a 
                    safe, non-judgmental space where clients can explore their thoughts, feelings, and 
                    behaviors while developing healthy coping strategies.
                  </p>
                  <p>
                    I am passionate about helping individuals overcome anxiety, depression, trauma, 
                    relationship challenges, and other mental health concerns. My goal is to empower 
                    clients with the tools and insights needed to lead fulfilling, balanced lives.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Philosophy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Evidence-Based Care</h4>
                      <p className="text-gray-600 text-sm">Using proven therapeutic methods backed by research</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Collaborative Approach</h4>
                      <p className="text-gray-600 text-sm">Working together to set and achieve your goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Cultural Sensitivity</h4>
                      <p className="text-gray-600 text-sm">Respecting diverse backgrounds and experiences</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Holistic Wellness</h4>
                      <p className="text-gray-600 text-sm">Addressing mind, body, and spirit connection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-blue-600" />
                    Qualifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {qualifications.map((qual, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-blue-600" />
                    Specializations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {specializations.map((spec, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Ready to Start Your Journey?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Take the first step towards better mental health today.
                    </p>
                    <Button className="w-full" asChild>
                      <Link href="#contact">Schedule Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 