'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, User, Heart } from "lucide-react"
import { api } from '@/lib/api'

export default function PatientLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await api.login(email, password)
      
      // Store the token
      localStorage.setItem('patient_token', response.access_token)
      localStorage.setItem('patient_user', JSON.stringify(response.user))
      
      // Check if user is patient
      if (response.user.role !== 'patient') {
        setError('Access denied. This login is for patients only.')
        localStorage.removeItem('patient_token')
        localStorage.removeItem('patient_user')
        return
      }

      // Redirect to patient dashboard
      router.push('/patient/dashboard')
    } catch (err: any) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
            <Heart className="h-6 w-6 text-purple-600" />
          </div>
          <CardTitle className="text-2xl font-bold gradient-text">Patient Login</CardTitle>
          <CardDescription>
            Sign in to access your mental health dashboard
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="glass-morphism"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="glass-morphism"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full btn-modern"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <User className="mr-2 h-4 w-4" />
                  Sign in to Your Dashboard
                </>
              )}
            </Button>
            
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/register" className="text-purple-600 hover:text-purple-800 font-medium">
                  Register here
                </Link>
              </p>
              <p className="text-sm text-gray-600">
                Are you a healthcare provider?{' '}
                <Link href="/admin/login" className="text-blue-600 hover:text-blue-800 font-medium">
                  Admin Login
                </Link>
              </p>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
} 