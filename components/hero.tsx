import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, Award } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Dr. Akanksha Agarwal
                <span className="block text-3xl text-primary font-medium mt-2">PsyD, Licensed Psychologist</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Providing compassionate, evidence-based psychological services to help you navigate life's challenges
                and achieve mental wellness.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground" asChild>
                <Link href="/appointments">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-gray-700">Licensed Professional</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-gray-700">Flexible Scheduling</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-secondary/30 to-secondary/20 rounded-2xl flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Dr. Akanksha Agarwal"
                className="w-80 h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
