import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Users, Star, Trophy, Brain, Shield, CheckCircle } from "lucide-react"

const accomplishments = [
  "Gold Medallist for academic excellence during postgraduate training",
  "Course Coordinator for PG Diploma in Psychological Counselling Skills",
  "Clinical supervision for trainee therapists and postgraduate courses",
  "Central Govt Certified Member, American Psychological Association",
  "Published researcher with multiple peer-reviewed publications",
  "Award recipient for outstanding contributions to mental health field"
]

const credentials = [
  "PsyD in Clinical Psychology - Doctorate from recognized institution (2024)",
  "Licensed Clinical & Counseling Psychologist - Registered with RCI",
  "Certified in Cognitive Behavioural Therapy (CBT) - Equipping effective intervention strategies",
  "Certified in rTMS Workshop - Advanced training at AIIMS Delhi, endorsed by ICMR (2024)",
  "Mindfulness & Emotional Skills Facilitator - Workshops for educators, adolescents, and caregivers",
  "Anger Management & Communication Skills Trainer - Certified to lead group-focused programs",
  "Member, American Psychological Association",
]

export function Accomplishments() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-6 border border-white/30">
            <Trophy className="h-4 w-4 text-purple-500" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              Professional Excellence
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Accomplishments
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Recognized expertise and commitment to excellence in mental health care
          </p>
        </div>

        {/* Professional Accomplishments */}
        <div className="mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Key Achievements</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {accomplishments.map((accomplishment, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-white/50 to-white/30 border border-white/20 hover:from-white/80 hover:to-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                        {accomplishment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credentials & Certifications */}
        <div className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/30 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Credentials & Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map((credential, index) => (
              <div key={index} className="group flex items-start space-x-4 p-4 rounded-2xl bg-white/50 border border-white/20 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                  {credential}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
