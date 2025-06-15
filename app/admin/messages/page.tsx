'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Mail, MailOpen, Reply, Archive, Trash2, User, Phone } from "lucide-react"
import AdminLayout from '@/components/admin/admin-layout'
import { api, ContactMessage } from '@/lib/api'

const statusColors = {
  unread: 'bg-red-100 text-red-800',
  read: 'bg-blue-100 text-blue-800',
  replied: 'bg-green-100 text-green-800',
  archived: 'bg-gray-100 text-gray-800'
}

const statusIcons = {
  unread: Mail,
  read: MailOpen,
  replied: Reply,
  archived: Archive
}

export default function AdminMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null)
  const [isReplyDialogOpen, setIsReplyDialogOpen] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [actionLoading, setActionLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      setLoading(true)
      const messagesData = await api.getContactMessages()
      setMessages(messagesData)
    } catch (error) {
      setError('Failed to fetch messages')
      console.error('Error fetching messages:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredMessages = messages.filter(message =>
    statusFilter === 'all' || message.status === statusFilter
  )

  const handleStatusChange = async (messageId: string, newStatus: string) => {
    setActionLoading(true)
    setError('')
    setSuccess('')

    try {
      await api.updateContactMessage(messageId, { status: newStatus as any })
      setSuccess('Message status updated successfully')
      await fetchMessages()
    } catch (error: any) {
      setError(error.message || 'Failed to update message status')
    } finally {
      setActionLoading(false)
    }
  }

  const handleReply = (message: ContactMessage) => {
    setSelectedMessage(message)
    setReplyText('')
    setIsReplyDialogOpen(true)
  }

  const handleSendReply = async () => {
    if (!selectedMessage || !replyText.trim()) return

    setActionLoading(true)
    setError('')
    setSuccess('')

    try {
      await api.updateContactMessage(selectedMessage.id, {
        status: 'replied',
        reply: replyText,
        repliedAt: new Date().toISOString()
      })
      setSuccess('Reply sent successfully')
      setIsReplyDialogOpen(false)
      await fetchMessages()
    } catch (error: any) {
      setError(error.message || 'Failed to send reply')
    } finally {
      setActionLoading(false)
    }
  }

  const handleDelete = async (messageId: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return

    setActionLoading(true)
    setError('')
    setSuccess('')

    try {
      await api.deleteContactMessage(messageId)
      setSuccess('Message deleted successfully')
      await fetchMessages()
    } catch (error: any) {
      setError(error.message || 'Failed to delete message')
    } finally {
      setActionLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Message Management</h1>
            <p className="text-gray-600">Manage contact form messages and inquiries</p>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Messages</SelectItem>
                <SelectItem value="unread">Unread</SelectItem>
                <SelectItem value="read">Read</SelectItem>
                <SelectItem value="replied">Replied</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
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

        <div className="grid gap-4">
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            filteredMessages.map((message) => {
              const StatusIcon = statusIcons[message.status] || Mail
              return (
                <Card key={message.id} className={`transition-all ${message.status === 'unread' ? 'border-l-4 border-l-red-500' : ''}`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="font-medium">{message.firstName} {message.lastName}</span>
                        </div>
                        <Badge className={statusColors[message.status]}>
                          <StatusIcon className="mr-1 h-3 w-3" />
                          {message.status.charAt(0).toUpperCase() + message.status.slice(1)}
                        </Badge>
                      </div>
                      <span className="text-sm text-gray-500">{formatDate(message.createdAt)}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4" />
                        <span>{message.email}</span>
                      </div>
                      {message.phone && (
                        <div className="flex items-center space-x-1">
                          <Phone className="h-4 w-4" />
                          <span>{message.phone}</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Message:</h4>
                        <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
                      </div>
                      
                      {message.reply && (
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2 text-blue-800">Reply:</h4>
                          <p className="text-blue-700 whitespace-pre-wrap">{message.reply}</p>
                          {message.repliedAt && (
                            <p className="text-xs text-blue-600 mt-2">
                              Replied on {formatDate(message.repliedAt)}
                            </p>
                          )}
                        </div>
                      )}

                      <div className="flex justify-between items-center pt-4 border-t">
                        <div className="flex space-x-2">
                          <Select
                            value={message.status}
                            onValueChange={(value) => handleStatusChange(message.id, value)}
                            disabled={actionLoading}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="unread">Unread</SelectItem>
                              <SelectItem value="read">Read</SelectItem>
                              <SelectItem value="replied">Replied</SelectItem>
                              <SelectItem value="archived">Archived</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleReply(message)}
                            disabled={actionLoading}
                          >
                            <Reply className="h-4 w-4 mr-2" />
                            Reply
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(message.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            disabled={actionLoading}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })
          )}
        </div>

        <Dialog open={isReplyDialogOpen} onOpenChange={setIsReplyDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Reply to Message</DialogTitle>
              <DialogDescription>
                Send a reply to {selectedMessage?.firstName} {selectedMessage?.lastName}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Original Message:</h4>
                <p className="text-gray-700 text-sm">{selectedMessage?.message}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Reply:</label>
                <Textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply here..."
                  rows={5}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsReplyDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSendReply} disabled={actionLoading || !replyText.trim()}>
                {actionLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Reply className="mr-2 h-4 w-4" />
                    Send Reply
                  </>
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  )
} 