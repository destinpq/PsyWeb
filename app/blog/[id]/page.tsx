import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Clock, User } from "lucide-react"
import Link from "next/link"

// Default blog posts as fallback (same as used in blog-preview and blog page)
const defaultBlogPosts = [
  {
    id: 1,
    title: "Understanding Anxiety: A Comprehensive Guide",
    excerpt: "Learn about the different types of anxiety disorders, their symptoms, and effective treatment approaches that can help you regain control of your life.",
    content: `
      <h2>What is Anxiety?</h2>
      <p>Anxiety is a natural human response to stress and potential threats. However, when anxiety becomes excessive, persistent, and interferes with daily life, it may indicate an anxiety disorder.</p>
      
      <h3>Common Types of Anxiety Disorders</h3>
      <ul>
        <li><strong>Generalized Anxiety Disorder (GAD):</strong> Excessive worry about various aspects of life</li>
        <li><strong>Social Anxiety Disorder:</strong> Intense fear of social situations and judgment</li>
        <li><strong>Panic Disorder:</strong> Recurring panic attacks with physical symptoms</li>
        <li><strong>Specific Phobias:</strong> Irrational fears of specific objects or situations</li>
      </ul>
      
      <h3>Symptoms to Watch For</h3>
      <p>Anxiety can manifest in various ways:</p>
      <ul>
        <li>Excessive worrying or racing thoughts</li>
        <li>Physical symptoms like rapid heartbeat, sweating, or trembling</li>
        <li>Difficulty concentrating or making decisions</li>
        <li>Avoidance of certain situations or places</li>
        <li>Sleep disturbances</li>
      </ul>
      
      <h3>Evidence-Based Treatment Approaches</h3>
      <p>Fortunately, anxiety disorders are highly treatable with proper care:</p>
      <ul>
        <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Helps identify and change negative thought patterns</li>
        <li><strong>Mindfulness-Based Interventions:</strong> Teaches present-moment awareness and acceptance</li>
        <li><strong>Exposure Therapy:</strong> Gradual exposure to feared situations in a safe environment</li>
        <li><strong>Medication:</strong> When appropriate, can help manage symptoms</li>
      </ul>
      
      <h3>When to Seek Help</h3>
      <p>If anxiety is significantly impacting your daily life, relationships, work, or overall well-being, it's time to reach out for professional support. Remember, seeking help is a sign of strength, not weakness.</p>
    `,
    category: "Mental Health",
    readTime: "8 min read",
    publishedAt: "2024-01-15",
    status: "published",
    author: "Dr. Akanksha Agarwal"
  },
  {
    id: 2,
    title: "The Power of Mindfulness in Daily Life",
    excerpt: "Discover how incorporating mindfulness practices into your routine can reduce stress, improve focus, and enhance overall well-being.",
    content: `
      <h2>What is Mindfulness?</h2>
      <p>Mindfulness is the practice of purposefully paying attention to the present moment without judgment. It's about becoming aware of what's happening right now, both internally and externally.</p>
      
      <h3>Benefits of Regular Mindfulness Practice</h3>
      <ul>
        <li><strong>Stress Reduction:</strong> Helps activate the body's relaxation response</li>
        <li><strong>Improved Focus:</strong> Trains attention and concentration abilities</li>
        <li><strong>Emotional Regulation:</strong> Better understanding and management of emotions</li>
        <li><strong>Enhanced Self-Awareness:</strong> Greater insight into thoughts and behaviors</li>
        <li><strong>Better Sleep:</strong> Can improve sleep quality and duration</li>
      </ul>
      
      <h3>Simple Mindfulness Exercises</h3>
      <p>You don't need hours of meditation to benefit from mindfulness:</p>
      <ul>
        <li><strong>Mindful Breathing:</strong> Focus on your breath for 5-10 minutes daily</li>
        <li><strong>Body Scan:</strong> Notice sensations throughout your body</li>
        <li><strong>Mindful Walking:</strong> Pay attention to each step and your surroundings</li>
        <li><strong>Mindful Eating:</strong> Savor each bite and notice flavors and textures</li>
      </ul>
      
      <h3>Incorporating Mindfulness into Your Day</h3>
      <p>Start small and build gradually:</p>
      <ul>
        <li>Begin with just 5 minutes of mindful breathing each morning</li>
        <li>Take mindful breaks during work or study</li>
        <li>Practice mindful listening during conversations</li>
        <li>Use daily activities as mindfulness opportunities</li>
      </ul>
      
      <p>Remember, mindfulness is a skill that develops over time. Be patient and compassionate with yourself as you learn.</p>
    `,
    category: "Wellness",
    readTime: "6 min read",
    publishedAt: "2024-01-10",
    status: "published",
    author: "Dr. Akanksha Agarwal"
  },
  {
    id: 3,
    title: "Breaking the Stigma Around Mental Health",
    excerpt: "Exploring the importance of open conversations about mental health and how we can create a more supportive society for those seeking help.",
    content: `
      <h2>Understanding Mental Health Stigma</h2>
      <p>Mental health stigma refers to the negative attitudes, beliefs, and behaviors directed toward people experiencing mental health challenges. This stigma can prevent individuals from seeking the help they need.</p>
      
      <h3>Common Myths and Misconceptions</h3>
      <ul>
        <li><strong>Myth:</strong> Mental health issues are a sign of weakness</li>
        <li><strong>Reality:</strong> Mental health conditions are medical conditions that can affect anyone</li>
        <li><strong>Myth:</strong> People with mental health issues are dangerous</li>
        <li><strong>Reality:</strong> Most people with mental health conditions are not violent</li>
        <li><strong>Myth:</strong> Mental health problems are permanent</li>
        <li><strong>Reality:</strong> With proper treatment, people can recover and lead fulfilling lives</li>
      </ul>
      
      <h3>The Impact of Stigma</h3>
      <p>Stigma can lead to:</p>
      <ul>
        <li>Delayed or avoided treatment</li>
        <li>Social isolation and discrimination</li>
        <li>Reduced opportunities in employment and education</li>
        <li>Self-stigma and shame</li>
        <li>Worsening of symptoms</li>
      </ul>
      
      <h3>How to Combat Mental Health Stigma</h3>
      <ul>
        <li><strong>Educate Yourself:</strong> Learn about mental health conditions and treatments</li>
        <li><strong>Use Person-First Language:</strong> Say "person with depression" not "depressed person"</li>
        <li><strong>Share Your Story:</strong> If comfortable, sharing experiences can help others</li>
        <li><strong>Listen Without Judgment:</strong> Provide support to those who confide in you</li>
        <li><strong>Challenge Stereotypes:</strong> Speak up when you hear misinformation</li>
      </ul>
      
      <h3>Creating Supportive Environments</h3>
      <p>We can all contribute to making mental health care more accessible and accepted by promoting understanding, empathy, and open dialogue in our communities.</p>
    `,
    category: "Awareness",
    readTime: "7 min read",
    publishedAt: "2024-01-05",
    status: "published",
    author: "Dr. Akanksha Agarwal"
  }
];

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = defaultBlogPosts.find(p => p.id === parseInt(params.id));
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - Psychology Practice',
    }
  }

  return {
    title: `${post.title} - Psychology Practice`,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: Props) {
  const post = defaultBlogPosts.find(p => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold mb-4">{post.title}</CardTitle>
              <CardDescription className="text-lg">{post.excerpt}</CardDescription>
            </CardHeader>
          </Card>

          {/* Article Content */}
          <Card>
            <CardContent className="prose prose-lg max-w-none p-8">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="space-y-6"
              />
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="mt-8 bg-blue-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Professional Support?
              </h3>
              <p className="text-gray-600 mb-6">
                If you're struggling with mental health challenges, don't hesitate to reach out for professional help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/appointments">Book Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 