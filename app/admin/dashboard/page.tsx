'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, MessageSquare, FileText, TrendingUp, Clock } from "lucide-react"
import AdminLayout from '@/components/admin/admin-layout'
import { api } from '@/lib/api'
import { useAPI } from '@/hooks/use-api'

interface DashboardStats {
  totalUsers: number
  totalAppointments: number
  pendingAppointments: number
  unreadMessages: number
  totalBlogPosts: number
  publishedBlogPosts: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalAppointments: 0,
    pendingAppointments: 0,
    unreadMessages: 0,
    totalBlogPosts: 0,
    publishedBlogPosts: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [users, appointments, messages, blogPosts] = await Promise.all([
          api.getUsers(),
          api.getAppointments(),
          api.getContactMessages(),
          api.getBlogPosts()
        ])

        setStats({
          totalUsers: users.length,
          totalAppointments: appointments.length,
          pendingAppointments: appointments.filter(a => a.status === 'pending').length,
          unreadMessages: messages.filter(m => m.status === 'unread').length,
          totalBlogPosts: blogPosts.length,
          publishedBlogPosts: blogPosts.filter(b => b.status === 'published').length
        })
      } catch (error) {
        console.error('Error fetching dashboard stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const statCards = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      icon: Users,
      description: 'Registered users',
      color: 'text-blue-600'
    },
    {
      title: 'Total Appointments',
      value: stats.totalAppointments,
      icon: Calendar,
      description: 'All appointments',
      color: 'text-green-600'
    },
    {
      title: 'Pending Appointments',
      value: stats.pendingAppointments,
      icon: Clock,
      description: 'Awaiting confirmation',
      color: 'text-yellow-600'
    },
    {
      title: 'Unread Messages',
      value: stats.unreadMessages,
      icon: MessageSquare,
      description: 'Contact messages',
      color: 'text-red-600'
    },
    {
      title: 'Total Blog Posts',
      value: stats.totalBlogPosts,
      icon: FileText,
      description: 'All blog posts',
      color: 'text-purple-600'
    },
    {
      title: 'Published Posts',
      value: stats.publishedBlogPosts,
      icon: TrendingUp,
      description: 'Live blog posts',
      color: 'text-indigo-600'
    }
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Overview of your psychology practice</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader className="pb-2">
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statCards.map((card) => (
              <Card key={card.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {card.title}
                  </CardTitle>
                  <card.icon className={`h-5 w-5 ${card.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{card.value}</div>
                  <p className="text-xs text-gray-500">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest system activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">New user registration</p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Appointment scheduled</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">New contact message</p>
                    <p className="text-xs text-gray-500">3 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <Users className="h-5 w-5 text-blue-600 mb-2" />
                  <p className="text-sm font-medium text-blue-900">Manage Users</p>
                </button>
                <button className="p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <Calendar className="h-5 w-5 text-green-600 mb-2" />
                  <p className="text-sm font-medium text-green-900">View Appointments</p>
                </button>
                <button className="p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors">
                  <MessageSquare className="h-5 w-5 text-yellow-600 mb-2" />
                  <p className="text-sm font-medium text-yellow-900">Read Messages</p>
                </button>
                <button className="p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <FileText className="h-5 w-5 text-purple-600 mb-2" />
                  <p className="text-sm font-medium text-purple-900">Create Post</p>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
} 