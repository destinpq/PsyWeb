'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // During hydration, show a basic layout to prevent mismatch
  if (!mounted) {
    return <>{children}</>
  }
  
  // Check if current path is an admin route
  const isAdminRoute = pathname?.startsWith('/admin')
  
  // For admin routes, just return children without header/footer
  if (isAdminRoute) {
    return <>{children}</>
  }
  
  // For regular routes, include header and footer
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
} 