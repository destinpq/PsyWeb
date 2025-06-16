'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '400px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#dc2626' }}>
          Something went wrong!
        </h1>
        <p style={{ marginBottom: '2rem', color: '#6b7280' }}>
          We're sorry, but something unexpected happened. Please try again.
        </p>
        <button
          onClick={reset}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            marginRight: '1rem'
          }}
        >
          Try Again
        </button>
        <a
          href="/"
          style={{
            backgroundColor: '#f3f4f6',
            color: '#374151',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            borderRadius: '0.375rem',
            border: '1px solid #d1d5db'
          }}
        >
          Go Home
        </a>
      </div>
    </div>
  )
} 