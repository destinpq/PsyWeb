import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Users, Star } from "lucide-react"

const accomplishments = [
  {
    icon: Star,
    title: "Licensed Clinical Psychologist",
    description: "Psychological Assessment & Diagnosis (child, adolescent, adult, geriatric) • Therapeutic Interventions – CBT, client-centered, mindfulness-based, trauma-informed care • Psycho-Oncology – Specialized support for patients undergoing cancer treatment and recovery • Family & Relationship Therapy • Adolescent & Young Adult Mental Health • Grief, Stress & Adjustment Disorders",
  },
  {
    icon: BookOpen,
    title: "Academician & Researcher",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: Award,
    title: "Professional Achievements",
    description: "Gold Medallist for academic excellence during postgraduate training • Course Coordinator for PG Diploma in Psychological Counselling Skills • Clinical supervision for trainee therapists and postgraduate courses • Central Govt Certified Member, American Psychological Association • Published researcher with multiple peer-reviewed publications • Award recipient for outstanding contributions to mental health field",
  },
]

const credentials = [
  "PsyD in Clinical Psychology - Doctorate from recognized institution (2024)",
  "Licensed Clinical & Counseling Psychologist - Registered with RCI",
  "Certified in Cognitive Behavioural Therapy (CBT) - Equipping effective intervention strategies",
  "Certified in PTSD-PTMS Workshop - Advanced training at AIIMS Delhi, endorsed by ICMR (2024)",
  "Mindfulness & Emotional Skills Facilitator - Workshops for educators, adolescents, and caregivers",
  "Anger Management & Communication Skills Trainer - Certified to lead group-focused programs",
  "Member, American Psychological Association",
]

export function Accomplishments() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Accomplishments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized expertise and commitment to excellence in mental health care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {accomplishments.map((item, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <item.icon className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Credentials & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-gray-700">{credential}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
