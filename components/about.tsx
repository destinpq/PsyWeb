import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Heart, Users, Brain } from "lucide-react"

export function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Dr. Akanksha Agarwal</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated mental health professional committed to providing personalized, evidence-based care
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Akanksha Agarwal is a licensed psychologist with a Doctor of Psychology (PsyD) degree, specializing in
              providing comprehensive mental health services to individuals, couples, and families. With over a decade
              of experience in clinical practice, she brings a warm, empathetic approach to therapy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Her practice is grounded in evidence-based treatments, including Cognitive Behavioral Therapy (CBT),
              Dialectical Behavior Therapy (DBT), and mindfulness-based interventions. Dr. Agarwal believes in creating
              a safe, non-judgmental space where clients can explore their thoughts, feelings, and behaviors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <GraduationCap className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Education</h3>
                <p className="text-sm text-gray-600">PsyD in Clinical Psychology</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <Heart className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Approach</h3>
                <p className="text-sm text-gray-600">Compassionate & Evidence-Based</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Specialization</h3>
                <p className="text-sm text-gray-600">Individual & Family Therapy</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <Brain className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Focus</h3>
                <p className="text-sm text-gray-600">Mental Wellness & Growth</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
