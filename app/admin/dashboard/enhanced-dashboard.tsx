'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  FileText, 
  TrendingUp, 
  Clock,
  AlertCircle,
  CheckCircle,
  Activity,
  Heart,
  Star,
  Filter,
  Download,
  RefreshCw
} from "lucide-react"
import { api } from '@/lib/api'

interface DashboardStats {
  users: number
  appointments: number
  messages: number
  blogPosts: number
  recentAppointments: any[]
  recentMessages: any[]
  appointmentsByStatus: Record<string, number>
  usersByRole: Record<string, number>
  monthlyStats: Array<{ month: string; appointments: number; users: number }>
}

export function EnhancedDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    users: 0,
    appointments: 0,
    messages: 0,
    blogPosts: 0,
    recentAppointments: [],
    recentMessages: [],
    appointmentsByStatus: {},
    usersByRole: {},
    monthlyStats: []
  })
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState('7d')

  const loadDashboardData = async () => {
    try {
      const [users, appointments, messages, blogPosts] = await Promise.all([
        api.getUsers(),
        api.getAppointments(),
        api.getContactMessages(),
        api.getBlogPosts()
      ])

      // Calculate appointment stats by status
      const appointmentsByStatus = appointments.reduce((acc: any, apt: any) => {
        acc[apt.status] = (acc[apt.status] || 0) + 1
        return acc
      }, {})

      // Calculate user stats by role
      const usersByRole = users.reduce((acc: any, user: any) => {
        acc[user.role] = (acc[user.role] || 0) + 1
        return acc
      }, {})

      // Generate mock monthly stats (in a real app, this would come from analytics)
      const monthlyStats = [
        { month: 'Jan', appointments: 45, users: 12 },
        { month: 'Feb', appointments: 52, users: 18 },
        { month: 'Mar', appointments: 61, users: 25 },
        { month: 'Apr', appointments: 48, users: 16 },
        { month: 'May', appointments: 67, users: 22 },
        { month: 'Jun', appointments: 73, users: 28 }
      ]

      setStats({
        users: users.length,
        appointments: appointments.length,
        messages: messages.length,
        blogPosts: blogPosts.length,
        recentAppointments: appointments.slice(0, 5),
        recentMessages: messages.slice(0, 5),
        appointmentsByStatus,
        usersByRole,
        monthlyStats
      })
    } catch (error) {
      console.error('Failed to load dashboard data:', error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    loadDashboardData()
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    await loadDashboardData()
  }

  const statCards = [
    {
      title: 'Total Users',
      value: stats.users,
      icon: Users,
      color: 'bg-blue-500',
      change: '+12%',
      changeColor: 'text-green-600'
    },
    {
      title: 'Appointments',
      value: stats.appointments,
      icon: Calendar,
      color: 'bg-green-500',
      change: '+8%',
      changeColor: 'text-green-600'
    },
    {
      title: 'Messages',
      value: stats.messages,
      icon: MessageSquare,
      color: 'bg-yellow-500',
      change: '+15%',
      changeColor: 'text-green-600'
    },
    {
      title: 'Blog Posts',
      value: stats.blogPosts,
      icon: FileText,
      color: 'bg-purple-500',
      change: '+3%',
      changeColor: 'text-green-600'
    }
  ]

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
    completed: 'bg-blue-100 text-blue-800'
  }

  const roleColors = {
    admin: 'bg-red-100 text-red-800',
    therapist: 'bg-blue-100 text-blue-800',
    staff: 'bg-green-100 text-green-800',
    manager: 'bg-purple-100 text-purple-800',
    patient: 'bg-gray-100 text-gray-800'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="flex items-center space-x-2">
          <RefreshCw className="h-5 w-5 animate-spin" />
          <span>Loading dashboard...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your practice.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => setSelectedPeriod('7d')}>
            7 Days
          </Button>
          <Button variant="outline" size="sm" onClick={() => setSelectedPeriod('30d')}>
            30 Days
          </Button>
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={refreshing}>
            {refreshing ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card, index) => (
          <Card key={card.title} className="hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <div className={`p-2 rounded-full ${card.color} bg-opacity-20`}>
                <card.icon className={`h-4 w-4 text-white`} style={{ filter: 'brightness(0.8)' }} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value.toLocaleString()}</div>
              <div className="flex items-center space-x-1 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span className={card.changeColor}>{card.change}</span>
                <span className="text-muted-foreground">from last period</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Analytics */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Appointment Status Distribution */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Appointment Status</span>
            </CardTitle>
            <CardDescription>
              Distribution of appointment statuses
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(stats.appointmentsByStatus).map(([status, count]) => (
              <div key={status} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Badge className={statusColors[status as keyof typeof statusColors]}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{count as number}</span>
                  </div>
                  <span className="text-sm font-medium">
                    {Math.round(((count as number) / stats.appointments) * 100)}%
                  </span>
                </div>
                <Progress 
                  value={((count as number) / stats.appointments) * 100} 
                  className="h-2"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* User Role Distribution */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>User Roles</span>
            </CardTitle>
            <CardDescription>
              Distribution of user roles in the system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(stats.usersByRole).map(([role, count]) => (
              <div key={role} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Badge className={roleColors[role as keyof typeof roleColors]}>
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{count as number}</span>
                  </div>
                  <span className="text-sm font-medium">
                    {Math.round(((count as number) / stats.users) * 100)}%
                  </span>
                </div>
                <Progress 
                  value={((count as number) / stats.users) * 100} 
                  className="h-2"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Recent Appointments</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentAppointments.length > 0 ? (
                stats.recentAppointments.map((appointment: any, index: number) => (
                  <div key={appointment.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {appointment.patient?.firstName} {appointment.patient?.lastName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                        </p>
                      </div>
                    </div>
                    <Badge className={statusColors[appointment.status as keyof typeof statusColors]}>
                      {appointment.status}
                    </Badge>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No recent appointments</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <span>Recent Messages</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentMessages.length > 0 ? (
                stats.recentMessages.map((message: any, index: number) => (
                  <div key={message.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0">
                      <MessageSquare className="h-4 w-4 text-muted-foreground mt-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium truncate">
                          {message.firstName} {message.lastName}
                        </p>
                        <span className="text-xs text-muted-foreground">
                          {new Date(message.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {message.subject}
                      </p>
                      <Badge className={message.status === 'unread' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}>
                        {message.status}
                      </Badge>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No recent messages</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5" />
            <span>Quick Actions</span>
          </CardTitle>
          <CardDescription>
            Common tasks and shortcuts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <Button className="h-16 flex-col space-y-2 bg-blue-500 hover:bg-blue-600">
              <Users className="h-5 w-5" />
              <span className="text-xs">Add User</span>
            </Button>
            <Button className="h-16 flex-col space-y-2 bg-green-500 hover:bg-green-600">
              <Calendar className="h-5 w-5" />
              <span className="text-xs">New Appointment</span>
            </Button>
            <Button className="h-16 flex-col space-y-2 bg-purple-500 hover:bg-purple-600">
              <FileText className="h-5 w-5" />
              <span className="text-xs">Write Post</span>
            </Button>
            <Button className="h-16 flex-col space-y-2 bg-orange-500 hover:bg-orange-600">
              <Download className="h-5 w-5" />
              <span className="text-xs">Export Data</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 