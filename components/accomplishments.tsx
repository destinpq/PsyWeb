import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Users, Star } from "lucide-react"

const accomplishments = [
  {
    icon: Award,
    title: "Licensed Psychologist",
    description: "State-licensed clinical psychologist with full practice privileges",
  },
  {
    icon: BookOpen,
    title: "Published Researcher",
    description: "Author of multiple peer-reviewed articles in clinical psychology journals",
  },
  {
    icon: Users,
    title: "Community Leader",
    description: "Active member of American Psychological Association and local mental health boards",
  },
  {
    icon: Star,
    title: "Excellence in Practice",
    description: "Recipient of Outstanding Clinical Service Award from State Psychology Board",
  },
]

const credentials = [
  "Doctor of Psychology (PsyD) - Clinical Psychology",
  "Licensed Clinical Psychologist - State Board Certified",
  "Certified in Cognitive Behavioral Therapy (CBT)",
  "EMDR Therapy Certification",
  "Trauma-Informed Care Specialist",
  "Member, American Psychological Association (APA)",
  "Member, State Psychological Association",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
