'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, AlertCircle } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2 text-blue-600" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Schedule an appointment or consultation</li>
                <li>Fill out forms or questionnaires</li>
                <li>Contact us via phone, email, or our website</li>
                <li>Participate in therapy sessions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-blue-600" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Provide therapeutic services and treatment</li>
                <li>Communicate with you about your care</li>
                <li>Schedule and manage appointments</li>
                <li>Comply with legal and professional obligations</li>
                <li>Improve our services and website</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                HIPAA Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                As a healthcare provider, we are committed to protecting your health information 
                in accordance with the Health Insurance Portability and Accountability Act (HIPAA). 
                Your medical information is kept confidential and is only shared as permitted by law 
                or with your written authorization.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or 
                destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
                              <div className="mt-4 space-y-2 text-gray-600">
                  <p>Email: dr.akankshagarwal@outlook.com</p>
                  <p>Phone: +91 7013983168 | +91 8074790542</p>
                  <p>Address: Dr. Akanksha Agarwal's Mental Healthcare Clinic<br />1-2-217/14, Ground Floor, Rajamanohar Colony, Domalguda, Himayat Nagar, Hyderabad - 500029</p>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 