'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Loader2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { useBlogPosts } from "@/hooks/use-api"
import { useState, useEffect } from "react"
import type { BlogPost } from "@/lib/api"

// Default blog posts as fallback
const defaultBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Anxiety: Signs, Symptoms, and Coping Strategies',
    excerpt: 'Learn to recognize the signs of anxiety and discover effective coping mechanisms that can help you manage daily stress and worry.',
    content: '',
    category: 'Mental Health',
    readTime: '8 min read',
    status: 'published',
    publishedAt: '2024-12-20T10:00:00Z',
    createdAt: '2024-12-20T10:00:00Z'
  },
  {
    id: '2',
    title: 'The Power of Mindfulness in Therapeutic Practice',
    excerpt: 'Explore how mindfulness-based interventions can enhance therapeutic outcomes and promote long-term mental wellness.',
    content: '',
    category: 'Therapy',
    readTime: '6 min read',
    status: 'published',
    publishedAt: '2024-12-18T14:30:00Z',
    createdAt: '2024-12-18T14:30:00Z'
  },
  {
    id: '3',
    title: 'Building Healthy Relationships: Communication That Works',
    excerpt: 'Discover effective communication techniques that can strengthen your relationships and resolve conflicts constructively.',
    content: '',
    category: 'Relationships',
    readTime: '7 min read',
    status: 'published',
    publishedAt: '2024-12-15T09:15:00Z',
    createdAt: '2024-12-15T09:15:00Z'
  },
  {
    id: '4',
    title: 'Coping with Grief: A Journey Through Loss and Healing',
    excerpt: 'Understanding the grief process and finding healthy ways to navigate loss while honoring your emotions and memories.',
    content: '',
    category: 'Grief Support',
    readTime: '10 min read',
    status: 'published',
    publishedAt: '2024-12-12T16:45:00Z',
    createdAt: '2024-12-12T16:45:00Z'
  },
  {
    id: '5',
    title: 'Teen Mental Health: Supporting Adolescents Through Challenges',
    excerpt: 'Guidelines for parents and caregivers on how to recognize mental health issues in teenagers and provide appropriate support.',
    content: '',
    category: 'Adolescent Care',
    readTime: '9 min read',
    status: 'published',
    publishedAt: '2024-12-10T11:20:00Z',
    createdAt: '2024-12-10T11:20:00Z'
  },
  {
    id: '6',
    title: 'The Role of Family Therapy in Healing Relationships',
    excerpt: 'Learn how family therapy can address systemic issues and improve communication patterns within family units.',
    content: '',
    category: 'Family Therapy',
    readTime: '8 min read',
    status: 'published',
    publishedAt: '2024-12-08T13:00:00Z',
    createdAt: '2024-12-08T13:00:00Z'
  }
];

export default function BlogPage() {
  const { data: blogPosts, loading, error } = useBlogPosts();
  const [displayPosts, setDisplayPosts] = useState<BlogPost[]>(defaultBlogPosts);

  useEffect(() => {
    if (blogPosts && blogPosts.length > 0) {
      setDisplayPosts(blogPosts);
    } else if (error) {
      // Use default blog posts when API fails
      setDisplayPosts(defaultBlogPosts);
    }
  }, [blogPosts, error]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Blog & Articles</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Mental health insights and professional guidance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-24" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Blog & Articles</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Mental health insights and professional guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
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
      </div>
    </div>
  );
} 