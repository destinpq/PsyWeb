import { Metadata } from 'next'
import { Contact } from '@/components/contact'
import { Button } from '@/components/ui/button'
import { Instagram, Linkedin, Youtube } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Psychology Practice',
  description: 'Get in touch with our psychology practice. Schedule an appointment or ask questions about our mental health services.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We're here to help. Reach out to schedule an appointment or ask any questions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">Email</p>
                      <p className="text-gray-600 text-sm sm:text-base break-all">dr.akankshagarwal@outlook.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">Address</p>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Dr. Akanksha Agarwal's Mental Healthcare Clinic<br />
                        1-2-217/14, Ground Floor, Rajamolian Colony<br />
                        Domalguda, Himayat Nagar, Hyderabad - 500029
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">Phone</p>
                      <p className="text-gray-600 text-sm sm:text-base">+91 7013983168 | +91 8074790542</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  Consultation Hours
                </h3>
                <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <p className="font-medium">Consultations by prior appointment only</p>
                  <p>Please call or email to schedule your session</p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  Follow Dr. Agarwal
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Stay connected on social media</p>
                <div className="flex space-x-3 sm:space-x-4">
                  <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10" asChild>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 