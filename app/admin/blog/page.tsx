'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Plus, Edit, Trash2, Eye, EyeOff, Calendar } from "lucide-react"
import AdminLayout from '@/components/admin/admin-layout'
import { api, BlogPost } from '@/lib/api'

const statusColors = {
  draft: 'bg-gray-100 text-gray-800',
  published: 'bg-green-100 text-green-800',
  archived: 'bg-red-100 text-red-800'
}

export default function AdminBlog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    readTime: '',
    tags: '',
    featuredImage: '',
    status: 'draft'
  })
  const [actionLoading, setActionLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  const fetchBlogPosts = async () => {
    try {
      setLoading(true)
      const blogData = await api.getBlogPosts()
      setBlogPosts(blogData)
    } catch (error) {
      setError('Failed to fetch blog posts')
      console.error('Error fetching blog posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredPosts = blogPosts.filter(post =>
    statusFilter === 'all' || post.status === statusFilter
  )

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post)
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      readTime: post.readTime || '',
      tags: post.tags || '',
      featuredImage: post.featuredImage || '',
      status: post.status
    })
    setIsEditDialogOpen(true)
  }

  const handleCreate = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      readTime: '',
      tags: '',
      featuredImage: '',
      status: 'draft'
    })
    setIsCreateDialogOpen(true)
  }

  const handleSubmit = async (isEdit: boolean) => {
    setActionLoading(true)
    setError('')
    setSuccess('')

    try {
      const blogData = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        readTime: formData.readTime || undefined,
        tags: formData.tags || undefined,
        featuredImage: formData.featuredImage || undefined,
        status: formData.status as any
      }

      if (isEdit && selectedPost) {
        await api.updateBlogPost(selectedPost.id, blogData)
        setSuccess('Blog post updated successfully')
        setIsEditDialogOpen(false)
      } else {
        await api.createBlogPost(blogData)
        setSuccess('Blog post created successfully')
        setIsCreateDialogOpen(false)
      }

      await fetchBlogPosts()
    } catch (error: any) {
      setError(error.message || 'Operation failed')
    } finally {
      setActionLoading(false)
    }
  }

  const handlePublish = async (postId: string) => {
    setActionLoading(true)
    setError('')
    setSuccess('')

    try {
      await api.publishBlogPost(postId)
      setSuccess('Blog post published successfully')
      await fetchBlogPosts()
    } catch (error: any) {
      setError(error.message || 'Failed to publish post')
    } finally {
      setActionLoading(false)
    }
  }

  const handleUnpublish = async (postId: string) => {
    setActionLoading(true)
    setError('')
    setSuccess('')

    try {
      await api.unpublishBlogPost(postId)
      setSuccess('Blog post unpublished successfully')
      await fetchBlogPosts()
    } catch (error: any) {
      setError(error.message || 'Failed to unpublish post')
    } finally {
      setActionLoading(false)
    }
  }

  const handleDelete = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return

    setActionLoading(true)
    setError('')
    setSuccess('')

    try {
      await api.deleteBlogPost(postId)
      setSuccess('Blog post deleted successfully')
      await fetchBlogPosts()
    } catch (error: any) {
      setError(error.message || 'Failed to delete post')
    } finally {
      setActionLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const BlogDialog = ({ isEdit, open, onOpenChange }: { isEdit: boolean, open: boolean, onOpenChange: (open: boolean) => void }) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}</DialogTitle>
          <DialogDescription>
            {isEdit ? 'Update blog post information' : 'Add a new blog post'}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Enter blog post title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
              placeholder="Brief description of the post..."
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              placeholder="Write your blog post content here..."
              rows={8}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                placeholder="Psychology, Therapy, etc."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="readTime">Read Time (Optional)</Label>
              <Input
                id="readTime"
                value={formData.readTime}
                onChange={(e) => setFormData(prev => ({ ...prev, readTime: e.target.value }))}
                placeholder="5 min read"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags">Tags (Optional)</Label>
            <Input
              id="tags"
              value={formData.tags}
              onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
              placeholder="mental health, therapy, wellness"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="featuredImage">Featured Image URL (Optional)</Label>
            <Input
              id="featuredImage"
              value={formData.featuredImage}
              onChange={(e) => setFormData(prev => ({ ...prev, featuredImage: e.target.value }))}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
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
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => handleSubmit(isEdit)} disabled={actionLoading}>
            {actionLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isEdit ? 'Updating...' : 'Creating...'}
              </>
            ) : (
              isEdit ? 'Update Post' : 'Create Post'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
            <p className="text-gray-600">Manage blog posts and content</p>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Posts</SelectItem>
                <SelectItem value="draft">Drafts</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleCreate}>
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </div>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>All Blog Posts</CardTitle>
            <CardDescription>
              Total: {blogPosts.length} posts | Filtered: {filteredPosts.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{post.title}</div>
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {post.excerpt}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{post.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={statusColors[post.status]}>
                          {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span>{formatDate(post.createdAt)}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {post.publishedAt ? (
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                        ) : (
                          <span className="text-gray-500">Not published</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(post)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          {post.status === 'published' ? (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleUnpublish(post.id)}
                              disabled={actionLoading}
                            >
                              <EyeOff className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handlePublish(post.id)}
                              disabled={actionLoading || post.status === 'archived'}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(post.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            disabled={actionLoading}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        <BlogDialog
          isEdit={true}
          open={isEditDialogOpen}
          onOpenChange={setIsEditDialogOpen}
        />

        <BlogDialog
          isEdit={false}
          open={isCreateDialogOpen}
          onOpenChange={setIsCreateDialogOpen}
        />
      </div>
    </AdminLayout>
  )
} 