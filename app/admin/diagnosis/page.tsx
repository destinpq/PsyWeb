'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  FileText, 
  User, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Archive,
  Send,
  MessageSquare
} from "lucide-react"

interface Diagnosis {
  id: string
  patientId: string
  patient: {
    id: string
    firstName: string
    lastName: string
    email: string
    phone?: string
  }
  diagnosisCode: string
  diagnosisName: string
  description: string
  symptoms?: string
  treatmentPlan?: string
  medications?: string
  notes?: string
  severity: 'mild' | 'moderate' | 'severe' | 'critical'
  status: 'draft' | 'confirmed' | 'under_review' | 'archived'
  diagnosisDate?: string
  followUpDate?: string
  createdAt: string
}

const severityColors = {
  mild: 'bg-green-100 text-green-800',
  moderate: 'bg-yellow-100 text-yellow-800',
  severe: 'bg-orange-100 text-orange-800',
  critical: 'bg-red-100 text-red-800'
}

const statusColors = {
  draft: 'bg-gray-100 text-gray-800',
  confirmed: 'bg-green-100 text-green-800',
  under_review: 'bg-blue-100 text-blue-800',
  archived: 'bg-purple-100 text-purple-800'
}

export default function DiagnosisPortal() {
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([])
  const [patients, setPatients] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [selectedDiagnosis, setSelectedDiagnosis] = useState<Diagnosis | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isWhatsAppDialogOpen, setIsWhatsAppDialogOpen] = useState(false)

  const [formData, setFormData] = useState({
    patientId: '',
    diagnosisCode: '',
    diagnosisName: '',
    description: '',
    symptoms: '',
    treatmentPlan: '',
    medications: '',
    notes: '',
    severity: 'mild' as const,
    diagnosisDate: '',
    followUpDate: ''
  })

  useEffect(() => {
    loadDiagnoses()
    loadPatients()
  }, [])

  const loadDiagnoses = async () => {
    try {
      const response = await fetch('/api/admin/diagnosis')
      const data = await response.json()
      setDiagnoses(data.diagnoses || [])
    } catch (error) {
      console.error('Failed to load diagnoses:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadPatients = async () => {
    try {
      const response = await fetch('/api/admin/patients')
      const data = await response.json()
      setPatients(data.patients || [])
    } catch (error) {
      console.error('Failed to load patients:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/admin/diagnosis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsCreateDialogOpen(false)
        resetForm()
        loadDiagnoses()
      }
    } catch (error) {
      console.error('Failed to create diagnosis:', error)
    }
  }

  const handleUpdate = async () => {
    if (!selectedDiagnosis) return

    try {
      const response = await fetch(`/api/admin/diagnosis/${selectedDiagnosis.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsEditDialogOpen(false)
        setSelectedDiagnosis(null)
        resetForm()
        loadDiagnoses()
      }
    } catch (error) {
      console.error('Failed to update diagnosis:', error)
    }
  }

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      await fetch(`/api/admin/diagnosis/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      })
      loadDiagnoses()
    } catch (error) {
      console.error('Failed to update status:', error)
    }
  }

  const sendWhatsAppReport = async (diagnosis: Diagnosis) => {
    if (!diagnosis.patient.phone) {
      alert('Patient phone number not available')
      return
    }

    try {
      const reportData = {
        patientName: `${diagnosis.patient.firstName} ${diagnosis.patient.lastName}`,
        reportType: 'Diagnosis Report',
        summary: diagnosis.description,
        recommendations: diagnosis.treatmentPlan ? diagnosis.treatmentPlan.split('\n') : [],
        nextSteps: diagnosis.followUpDate ? `Follow-up scheduled for ${diagnosis.followUpDate}` : 'Follow-up to be scheduled'
      }

      const response = await fetch('/api/admin/whatsapp/analysis-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phoneNumber: diagnosis.patient.phone,
          reportData
        })
      })

      if (response.ok) {
        alert('Report sent via WhatsApp successfully!')
      } else {
        alert('Failed to send WhatsApp message')
      }
    } catch (error) {
      console.error('Failed to send WhatsApp report:', error)
      alert('Failed to send WhatsApp message')
    }
  }

  const resetForm = () => {
    setFormData({
      patientId: '',
      diagnosisCode: '',
      diagnosisName: '',
      description: '',
      symptoms: '',
      treatmentPlan: '',
      medications: '',
      notes: '',
      severity: 'mild',
      diagnosisDate: '',
      followUpDate: ''
    })
  }

  const openEditDialog = (diagnosis: Diagnosis) => {
    setSelectedDiagnosis(diagnosis)
    setFormData({
      patientId: diagnosis.patientId,
      diagnosisCode: diagnosis.diagnosisCode,
      diagnosisName: diagnosis.diagnosisName,
      description: diagnosis.description,
      symptoms: diagnosis.symptoms || '',
      treatmentPlan: diagnosis.treatmentPlan || '',
      medications: diagnosis.medications || '',
      notes: diagnosis.notes || '',
      severity: diagnosis.severity,
      diagnosisDate: diagnosis.diagnosisDate || '',
      followUpDate: diagnosis.followUpDate || ''
    })
    setIsEditDialogOpen(true)
  }

  const filteredDiagnoses = diagnoses.filter(diagnosis => {
    const matchesSearch = 
      diagnosis.diagnosisName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      diagnosis.patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      diagnosis.patient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      diagnosis.diagnosisCode.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesSeverity = selectedSeverity === 'all' || diagnosis.severity === selectedSeverity
    const matchesStatus = selectedStatus === 'all' || diagnosis.status === selectedStatus
    
    return matchesSearch && matchesSeverity && matchesStatus
  })

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Diagnosis Portal</h1>
          <p className="text-gray-600">Manage patient diagnoses and treatment plans</p>
        </div>
        
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              New Diagnosis
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Diagnosis</DialogTitle>
              <DialogDescription>
                Add a new diagnosis for a patient with detailed information.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="patient">Patient</Label>
                  <Select value={formData.patientId} onValueChange={(value) => setFormData({...formData, patientId: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select patient" />
                    </SelectTrigger>
                    <SelectContent>
                      {patients.map((patient) => (
                        <SelectItem key={patient.id} value={patient.id}>
                          {patient.firstName} {patient.lastName} - {patient.email}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="diagnosisCode">Diagnosis Code (ICD-10/DSM-5)</Label>
                  <Input
                    id="diagnosisCode"
                    value={formData.diagnosisCode}
                    onChange={(e) => setFormData({...formData, diagnosisCode: e.target.value})}
                    placeholder="e.g., F32.1, 296.23"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="diagnosisName">Diagnosis Name</Label>
                <Input
                  id="diagnosisName"
                  value={formData.diagnosisName}
                  onChange={(e) => setFormData({...formData, diagnosisName: e.target.value})}
                  placeholder="e.g., Major Depressive Disorder, Moderate Episode"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Detailed description of the diagnosis..."
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="severity">Severity</Label>
                  <Select value={formData.severity} onValueChange={(value: any) => setFormData({...formData, severity: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mild">Mild</SelectItem>
                      <SelectItem value="moderate">Moderate</SelectItem>
                      <SelectItem value="severe">Severe</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="diagnosisDate">Diagnosis Date</Label>
                  <Input
                    id="diagnosisDate"
                    type="date"
                    value={formData.diagnosisDate}
                    onChange={(e) => setFormData({...formData, diagnosisDate: e.target.value})}
                  />
                </div>
              </div>

              <Tabs defaultValue="symptoms" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
                  <TabsTrigger value="treatment">Treatment Plan</TabsTrigger>
                  <TabsTrigger value="medications">Medications</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>
                
                <TabsContent value="symptoms" className="space-y-2">
                  <Label htmlFor="symptoms">Symptoms</Label>
                  <Textarea
                    id="symptoms"
                    value={formData.symptoms}
                    onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                    placeholder="List observed symptoms..."
                    rows={4}
                  />
                </TabsContent>
                
                <TabsContent value="treatment" className="space-y-2">
                  <Label htmlFor="treatmentPlan">Treatment Plan</Label>
                  <Textarea
                    id="treatmentPlan"
                    value={formData.treatmentPlan}
                    onChange={(e) => setFormData({...formData, treatmentPlan: e.target.value})}
                    placeholder="Detailed treatment plan and recommendations..."
                    rows={4}
                  />
                </TabsContent>
                
                <TabsContent value="medications" className="space-y-2">
                  <Label htmlFor="medications">Medications</Label>
                  <Textarea
                    id="medications"
                    value={formData.medications}
                    onChange={(e) => setFormData({...formData, medications: e.target.value})}
                    placeholder="Prescribed medications and dosages..."
                    rows={4}
                  />
                </TabsContent>
                
                <TabsContent value="notes" className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Additional clinical notes..."
                    rows={4}
                  />
                </TabsContent>
              </Tabs>

              <div className="space-y-2">
                <Label htmlFor="followUpDate">Follow-up Date</Label>
                <Input
                  id="followUpDate"
                  type="date"
                  value={formData.followUpDate}
                  onChange={(e) => setFormData({...formData, followUpDate: e.target.value})}
                />
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  Create Diagnosis
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search diagnoses, patients, or codes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="mild">Mild</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="severe">Severe</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="under_review">Under Review</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Diagnoses Table */}
      <Card>
        <CardHeader>
          <CardTitle>Patient Diagnoses</CardTitle>
          <CardDescription>
            Manage and track patient diagnoses with detailed treatment information
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading diagnoses...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Diagnosis</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDiagnoses.map((diagnosis) => (
                  <TableRow key={diagnosis.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">
                          {diagnosis.patient.firstName} {diagnosis.patient.lastName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {diagnosis.patient.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{diagnosis.diagnosisName}</div>
                        <div className="text-sm text-gray-500 max-w-xs truncate">
                          {diagnosis.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{diagnosis.diagnosisCode}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={severityColors[diagnosis.severity]}>
                        {diagnosis.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={diagnosis.status}
                        onValueChange={(value) => handleStatusUpdate(diagnosis.id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="under_review">Under Review</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      {diagnosis.diagnosisDate ? new Date(diagnosis.diagnosisDate).toLocaleDateString() : '-'}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openEditDialog(diagnosis)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        
                        {diagnosis.patient.phone && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => sendWhatsAppReport(diagnosis)}
                            className="text-green-600 hover:text-green-700"
                          >
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Edit Dialog - Similar structure to create dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Diagnosis</DialogTitle>
            <DialogDescription>
              Update diagnosis information and treatment plan.
            </DialogDescription>
          </DialogHeader>
          
          {/* Same form structure as create dialog but with handleUpdate */}
          <div className="space-y-4">
            {/* Form fields would be similar to create dialog */}
            <div className="text-center py-4">
              <Button onClick={handleUpdate} className="bg-purple-600 hover:bg-purple-700">
                Update Diagnosis
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
} 