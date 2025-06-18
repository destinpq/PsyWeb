'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Image, FileText, Settings, Eye, Upload, Video, File, X } from "lucide-react"
import { api, BlogPost } from '@/lib/api'

interface EnhancedBlogEditorProps {
  post?: BlogPost | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
}

interface FormData {
  title: string
  excerpt: string
  content: string
  category: string
  readTime: string
  tags: string
  featuredImage: string
  status: string
}

interface UploadedFile {
  url: string
  filename: string
  originalName: string
  size: string
  mimetype: string
  fileType: 'image' | 'video' | 'pdf'
}

export function EnhancedBlogEditor({ post, open, onOpenChange, onSuccess }: EnhancedBlogEditorProps) {
  const [formData, setFormData] = useState<FormData>({
    title: post?.title || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    category: post?.category || '',
    readTime: post?.readTime || '',
    tags: post?.tags || '',
    featuredImage: post?.featuredImage || '',
    status: post?.status || 'draft'
  })

  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('content')
  const [preview, setPreview] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    try {
      const result = await api.uploadImage(file)
      handleInputChange('featuredImage', result.url)
    } catch (err: any) {
      setError(err.message || 'Failed to upload image')
    } finally {
      setUploading(false)
    }
  }

  const handleMediaUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    try {
      const result = await api.uploadMedia(file)
      
      // Add to uploaded files list
      setUploadedFiles(prev => [...prev, {
        url: result.url,
        filename: result.filename,
        originalName: result.originalName,
        size: result.size,
        mimetype: result.mimetype,
        fileType: result.fileType as 'image' | 'video' | 'pdf'
      }])

      // Insert markdown into content
      const currentContent = formData.content
      const insertPosition = currentContent.length
      const newContent = currentContent.slice(0, insertPosition) + '\n\n' + result.markdown + '\n\n' + currentContent.slice(insertPosition)
      handleInputChange('content', newContent)
      
    } catch (err: any) {
      setError(err.message || 'Failed to upload file')
    } finally {
      setUploading(false)
    }
  }

  const removeUploadedFile = (filename: string) => {
    setUploadedFiles(prev => prev.filter(file => file.filename !== filename))
    
    // Remove from content as well
    const content = formData.content
    const lines = content.split('\n')
    const filteredLines = lines.filter(line => !line.includes(filename))
    handleInputChange('content', filteredLines.join('\n'))
  }

  const insertFileReference = (file: UploadedFile) => {
    let markdown = ''
    switch (file.fileType) {
      case 'image':
        markdown = `![${file.originalName}](${file.url})`
        break
      case 'video':
        markdown = `<video controls width="100%" style="max-width: 800px;">
  <source src="${file.url}" type="${file.mimetype}">
  Your browser does not support the video tag.
</video>

*Video: ${file.originalName}*`
        break
      case 'pdf':
        markdown = `[📄 ${file.originalName}](${file.url})

*PDF Document - Click to view*`
        break
    }
    
    const currentContent = formData.content
    handleInputChange('content', currentContent + '\n\n' + markdown + '\n\n')
  }

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.trim().split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} min read`
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError('')

    try {
      const blogData = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        readTime: formData.readTime || estimateReadTime(formData.content),
        tags: formData.tags || undefined,
        featuredImage: formData.featuredImage || undefined,
        status: formData.status as any
      }

      if (post) {
        await api.updateBlogPost(post.id, blogData)
      } else {
        await api.createBlogPost(blogData)
      }

      onSuccess()
      onOpenChange(false)
    } catch (err: any) {
      setError(err.message || 'Operation failed')
    } finally {
      setLoading(false)
    }
  }

  const statusColors = {
    draft: 'bg-gray-100 text-gray-800',
    published: 'bg-green-100 text-green-800',
    archived: 'bg-red-100 text-red-800'
  }

  const categories = [
    'Mental Health',
    'Therapy Techniques',
    'Self-Care',
    'Relationships',
    'Anxiety',
    'Depression',
    'Stress Management',
    'Mindfulness',
    'Psychology Tips',
    'Case Studies'
  ]

  const renderFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'image':
        return <Image className="h-4 w-4" />
      case 'video':
        return <Video className="h-4 w-4" />
      case 'pdf':
        return <File className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[1200px] max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>{post ? 'Edit Blog Post' : 'Create New Blog Post'}</span>
          </DialogTitle>
          <DialogDescription>
            {post ? 'Update your blog post content and settings' : 'Create a new blog post with rich media support'}
          </DialogDescription>
        </DialogHeader>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 overflow-hidden">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <div className="h-[60vh] overflow-y-auto">
            <TabsContent value="content" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>Content Editor</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPreview(!preview)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        {preview ? 'Edit' : 'Preview'}
                      </Button>
                      <Badge className={statusColors[formData.status as keyof typeof statusColors]}>
                        {formData.status.charAt(0).toUpperCase() + formData.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="Enter a compelling blog post title..."
                      className="text-lg font-semibold"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt *</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => handleInputChange('excerpt', e.target.value)}
                      placeholder="Brief description that will appear in previews..."
                      rows={3}
                      required
                    />
                    <div className="text-sm text-gray-500">
                      {formData.excerpt.length}/300 characters
                    </div>
                  </div>

                  {!preview ? (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="content">Content *</Label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="file"
                            accept="image/*,video/*,.pdf"
                            onChange={handleMediaUpload}
                            style={{ display: 'none' }}
                            id="mediaUpload"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => document.getElementById('mediaUpload')?.click()}
                            disabled={uploading}
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Insert Media
                          </Button>
                          {uploading && <Loader2 className="h-4 w-4 animate-spin" />}
                        </div>
                      </div>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => handleInputChange('content', e.target.value)}
                        placeholder="Write your blog post content here. You can use Markdown formatting and insert images, videos, and PDFs..."
                        rows={15}
                        className="font-mono"
                        required
                      />
                      <div className="text-sm text-gray-500">
                        Words: {formData.content.trim().split(/\s+/).filter(word => word).length} | 
                        Est. read time: {estimateReadTime(formData.content)}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Label>Content Preview</Label>
                      <div className="border rounded-lg p-4 bg-white max-h-96 overflow-y-auto">
                        <h1 className="text-2xl font-bold mb-4">{formData.title}</h1>
                        <p className="text-gray-600 mb-6 italic">{formData.excerpt}</p>
                        <div className="prose max-w-none">
                          {formData.content.split('\n').map((paragraph, index) => (
                            <div key={index} className="mb-4">
                              {paragraph.includes('![') ? (
                                <span className="text-blue-600 italic">[Image: {paragraph}]</span>
                              ) : paragraph.includes('<video') ? (
                                <span className="text-purple-600 italic">[Video Player]</span>
                              ) : paragraph.includes('[📄') ? (
                                <span className="text-red-600 italic">[PDF Document]</span>
                              ) : (
                                <p>{paragraph}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="media" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Image className="h-4 w-4" />
                    <span>Featured Image</span>
                  </CardTitle>
                  <CardDescription>
                    Upload a featured image for your blog post
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {formData.featuredImage && (
                    <div className="space-y-2">
                      <Label>Current Featured Image</Label>
                      <div className="border rounded-lg overflow-hidden">
                        <img
                          src={formData.featuredImage}
                          alt="Featured"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="featuredImageUpload">Upload Featured Image</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="featuredImageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploading}
                      />
                      {uploading && <Loader2 className="h-4 w-4 animate-spin" />}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="featuredImageUrl">Or paste image URL</Label>
                    <Input
                      id="featuredImageUrl"
                      value={formData.featuredImage}
                      onChange={(e) => handleInputChange('featuredImage', e.target.value)}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Upload className="h-4 w-4" />
                    <span>Media Library</span>
                  </CardTitle>
                  <CardDescription>
                    Upload and manage images, videos, and PDFs for your blog post
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Upload Media Files</Label>
                    <input
                      type="file"
                      accept="image/*,video/*,.pdf"
                      onChange={handleMediaUpload}
                      style={{ display: 'none' }}
                      id="mediaLibraryUpload"
                      multiple
                    />
                    <Button
                      variant="outline"
                      onClick={() => document.getElementById('mediaLibraryUpload')?.click()}
                      disabled={uploading}
                      className="w-full"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Images, Videos, or PDFs
                    </Button>
                    <div className="text-sm text-gray-500">
                      Supported formats: Images (JPEG, PNG, GIF, WebP), Videos (MP4, WebM, OGG), PDFs
                    </div>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <Label>Uploaded Files</Label>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border rounded">
                            <div className="flex items-center space-x-2">
                              {renderFileIcon(file.fileType)}
                              <div>
                                <div className="text-sm font-medium">{file.originalName}</div>
                                <div className="text-xs text-gray-500">{file.size} • {file.fileType}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => insertFileReference(file)}
                              >
                                Insert
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => removeUploadedFile(file.filename)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span>Post Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => handleInputChange('tags', e.target.value)}
                      placeholder="mental health, therapy, wellness (comma separated)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="readTime">Read Time</Label>
                    <Input
                      id="readTime"
                      value={formData.readTime}
                      onChange={(e) => handleInputChange('readTime', e.target.value)}
                      placeholder={estimateReadTime(formData.content)}
                    />
                    <div className="text-sm text-gray-500">
                      Leave empty to auto-calculate: {estimateReadTime(formData.content)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>

        <DialogFooter className="flex justify-between">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <div className="flex space-x-2">
            {formData.status === 'published' && (
              <Button
                variant="outline"
                onClick={() => handleInputChange('status', 'draft')}
              >
                Save as Draft
              </Button>
            )}
            <Button onClick={handleSubmit} disabled={loading || !formData.title || !formData.excerpt || !formData.content || !formData.category}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {post ? 'Updating...' : 'Creating...'}
                </>
              ) : (
                post ? 'Update Post' : 'Create Post'
              )}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 