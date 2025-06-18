'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Download, Play, FileText } from "lucide-react"

interface MediaPreviewProps {
  src: string
  alt?: string
  type: 'image' | 'video' | 'pdf'
  title?: string
  className?: string
}

export function MediaPreview({ src, alt, type, title, className = "" }: MediaPreviewProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const renderMedia = (fullscreen = false) => {
    const baseClassName = fullscreen ? "max-h-[80vh] max-w-full" : "w-full h-auto"
    
    switch (type) {
      case 'image':
        return (
          <img
            src={src}
            alt={alt || title || 'Blog image'}
            className={`${baseClassName} object-contain cursor-pointer rounded-lg`}
            onClick={() => !fullscreen && setIsFullscreen(true)}
          />
        )
      
      case 'video':
        return (
          <video
            controls
            className={`${baseClassName} rounded-lg`}
            preload="metadata"
          >
            <source src={src} type="video/mp4" />
            <source src={src} type="video/webm" />
            <source src={src} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        )
      
      case 'pdf':
        return (
          <Card className="p-6 text-center">
            <div className="flex flex-col items-center space-y-4">
              <FileText className="h-16 w-16 text-red-500" />
              <div>
                <h3 className="text-lg font-semibold">{title || 'PDF Document'}</h3>
                <p className="text-gray-600">Click to view or download</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => window.open(src, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View PDF
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = src
                    link.download = title || 'document.pdf'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </Card>
        )
      
      default:
        return null
    }
  }

  return (
    <>
      <div className={`my-4 ${className}`}>
        {renderMedia()}
        {title && type !== 'pdf' && (
          <p className="text-sm text-gray-600 italic mt-2 text-center">{title}</p>
        )}
      </div>

      {/* Fullscreen dialog for images */}
      {type === 'image' && (
        <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-4">
            <DialogHeader>
              <DialogTitle>{alt || title || 'Image'}</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center items-center">
              {renderMedia(true)}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

// Utility function to parse markdown content and render media
export function parseMediaContent(content: string) {
  const lines = content.split('\n')
  const parsedContent = []
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    // Image markdown: ![alt](url)
    const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/)
    if (imageMatch) {
      parsedContent.push({
        type: 'media' as const,
        mediaType: 'image' as const,
        src: imageMatch[2],
        alt: imageMatch[1],
        title: imageMatch[1]
      })
      continue
    }
    
    // Video HTML
    if (line.includes('<video')) {
      const srcMatch = line.match(/src="([^"]+)"/)
      const videoTitle = lines[i + 4]?.match(/\*Video: ([^*]+)\*/)
      if (srcMatch) {
        parsedContent.push({
          type: 'media' as const,
          mediaType: 'video' as const,
          src: srcMatch[1],
          title: videoTitle?.[1] || 'Video'
        })
        // Skip the next few lines that are part of the video HTML
        i += 4
        continue
      }
    }
    
    // PDF markdown: [📄 title](url)
    const pdfMatch = line.match(/\[📄 ([^\]]+)\]\(([^)]+)\)/)
    if (pdfMatch) {
      parsedContent.push({
        type: 'media' as const,
        mediaType: 'pdf' as const,
        src: pdfMatch[2],
        title: pdfMatch[1]
      })
      continue
    }
    
    // Regular text
    if (line.trim()) {
      parsedContent.push({
        type: 'text' as const,
        content: line
      })
    } else {
      parsedContent.push({
        type: 'break' as const
      })
    }
  }
  
  return parsedContent
}

// Blog content renderer component
interface BlogContentProps {
  content: string
  className?: string
}

export function BlogContent({ content, className = "" }: BlogContentProps) {
  const parsedContent = parseMediaContent(content)
  
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {parsedContent.map((item, index) => {
        switch (item.type) {
          case 'media':
            return (
              <MediaPreview
                key={index}
                src={item.src}
                alt={item.alt}
                type={item.mediaType}
                title={item.title}
              />
            )
          case 'text':
            return <p key={index} className="mb-4">{item.content}</p>
          case 'break':
            return <br key={index} />
          default:
            return null
        }
      })}
    </div>
  )
} 