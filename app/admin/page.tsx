'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('admin_token')
    const user = localStorage.getItem('admin_user')
    
    if (token && user) {
      try {
        const userData = JSON.parse(user)
        if (userData.role === 'admin') {
          // User is already logged in, redirect to dashboard
          router.push('/admin/dashboard')
          return
        }
      } catch (error) {
        // Invalid user data, clear and redirect to login
        localStorage.removeItem('admin_token')
        localStorage.removeItem('admin_user')
      }
    }
    
    // Not logged in or invalid credentials, redirect to login
    router.push('/admin/login')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  )
} 