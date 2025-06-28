'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { useBlogPosts } from "@/hooks/use-api"

// Default blog posts as fallback
const defaultBlogPosts = [
  {
    id: 1,
    title: "Understanding Anxiety: A Comprehensive Guide",
    excerpt: "Learn about the different types of anxiety disorders, their symptoms, and effective treatment approaches that can help you regain control of your life.",
    category: "Mental Health",
    readTime: "8 min read",
    publishedAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "The Power of Mindfulness in Daily Life",
    excerpt: "Discover how mindfulness practices can transform your mental health and improve your overall well-being through simple daily exercises.",
    category: "Wellness",
    readTime: "6 min read",
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 3,
    title: "Breaking the Stigma Around Mental Health",
    excerpt: "Exploring how we can create more supportive communities and normalize conversations about mental health challenges.",
    category: "Awareness",
    readTime: "7 min read",
    publishedAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString()
  }
];

export function BlogPreview() {
  const { data: blogPosts, loading, error } = useBlogPosts();

  // Use API data if available, otherwise fallback to default posts
  const displayPosts = (blogPosts && blogPosts.length > 0) ? blogPosts.slice(0, 3) : defaultBlogPosts;

  if (loading) {
    return (
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Professional guidance and mental health resources to support your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <Skeleton className="h-4 w-24" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-red-600 max-w-3xl mx-auto">
              Unable to load blog posts at this time. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Professional guidance and mental health resources to support your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {displayPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-200 group-hover:scale-[1.02]">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      {post.category}
                    </Badge>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {post.readTime || '5 min read'}
                    </span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Recently published'}
                    </div>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button size="sm" className="btn-modern group sm:size-lg" asChild>
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
