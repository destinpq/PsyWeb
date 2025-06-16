'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, AlertTriangle, Scale, Clock } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="h-5 w-5 mr-2 text-blue-600" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                By accessing and using our website and services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the 
                above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-blue-600" />
                Professional Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Our therapeutic services include:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Individual therapy sessions</li>
                <li>Couples and family counseling</li>
                <li>Group therapy sessions</li>
                <li>Mental health consultations</li>
                <li>Crisis intervention when appropriate</li>
              </ul>
              <p className="text-gray-600 mt-4">
                All services are provided by licensed mental health professionals in accordance 
                with applicable state laws and professional ethical standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                Appointment Policies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Scheduling</h4>
                <p className="text-gray-600">
                  Appointments can be scheduled online, by phone, or email. We will confirm 
                  all appointments within 24 hours of booking.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cancellation Policy</h4>
                <p className="text-gray-600">
                  Please provide at least 24 hours notice for cancellations. Late cancellations 
                  or no-shows may be subject to a cancellation fee.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Payment</h4>
                <p className="text-gray-600">
                  Payment is due at the time of service unless other arrangements have been made. 
                  We accept cash, check, and major credit cards.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Confidentiality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                All information shared during therapy sessions is confidential and protected by 
                law. We will not share your information without your written consent, except in 
                limited circumstances required by law, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Risk of harm to self or others</li>
                <li>Suspected child or elder abuse</li>
                <li>Court-ordered disclosure</li>
                <li>Insurance or billing purposes (with your consent)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Situations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our services are not intended for emergency situations. If you are experiencing 
                a mental health emergency, please:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Call 911 immediately</li>
                <li>Go to your nearest emergency room</li>
                <li>Call the National Suicide Prevention Lifeline: 988</li>
                <li>Call the Crisis Text Line: Text HOME to 741741</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                While we strive to provide the highest quality of care, therapy outcomes cannot 
                be guaranteed. Our liability is limited to the cost of services provided. We are 
                not responsible for indirect, consequential, or punitive damages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p>Email: info@psychology-website.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Wellness Drive, Suite 200, Mental Health Plaza, CA 90210</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 