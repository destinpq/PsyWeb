"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Clock, User, CalendarIcon, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useServices, useAvailableTimeSlots, useAppointmentForm, useUserForm } from "@/hooks/use-api"

export function AppointmentBookingUpdated() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedService, setSelectedService] = useState<string>("")
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    reasonForVisit: '',
    insuranceProvider: ''
  })

  // API hooks
  const { data: services, loading: servicesLoading } = useServices()
  const dateString = selectedDate ? selectedDate.toISOString().split('T')[0] : ''
  const { data: availableTimeSlots, loading: timeSlotsLoading } = useAvailableTimeSlots(dateString)
  const { submit: submitUser, loading: userLoading } = useUserForm()
  const { submit: submitAppointment, loading: appointmentLoading, error, success, reset } = useAppointmentForm()

  const isLoading = userLoading || appointmentLoading

  useEffect(() => {
    setSelectedTime("")
  }, [selectedDate])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedDate || !selectedTime || !selectedService || !formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      return
    }

    try {
      // First create/get user
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        age: formData.age ? parseInt(formData.age) : undefined,
      }

      const user = await submitUser(userData)
      
      // Then create appointment
      const appointmentData = {
        appointmentDate: dateString,
        appointmentTime: selectedTime,
        patientId: user.id,
        serviceId: selectedService,
        reasonForVisit: formData.reasonForVisit || undefined,
        insuranceProvider: formData.insuranceProvider || undefined,
      }

      const appointmentSuccess = await submitAppointment(appointmentData)
      
      if (appointmentSuccess) {
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          age: '',
          reasonForVisit: '',
          insuranceProvider: ''
        })
        setSelectedDate(new Date())
        setSelectedTime("")
        setSelectedService("")
      }
    } catch (err) {
      console.error('Error submitting appointment:', err)
    }
  }

  const selectedServiceData = services?.find(s => s.id === selectedService)

  if (success) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Booked Successfully!</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Thank you for scheduling your appointment. You will receive a confirmation email within 24 hours with all the details.
        </p>
        <Button onClick={reset} variant="outline">
          Book Another Appointment
        </Button>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Select Date & Time
          </CardTitle>
          <CardDescription>Choose your preferred appointment slot</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-base font-medium mb-3 block">Select Date</Label>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date() || date.getDay() === 0}
              className="rounded-md border"
            />
          </div>

          <div>
            <Label className="text-base font-medium mb-3 block">Available Times</Label>
            {timeSlotsLoading ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="h-6 w-6 animate-spin" />
                <span className="ml-2">Loading available times...</span>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {(availableTimeSlots || []).map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTime(time)}
                    className={selectedTime === time ? "bg-primary hover:bg-accent text-primary-foreground" : ""}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    {time}
                  </Button>
                ))}
                {availableTimeSlots?.length === 0 && (
                  <p className="col-span-2 text-center text-gray-500 py-4">
                    No available time slots for this date
                  </p>
                )}
              </div>
            )}
          </div>

          <div>
            <Label className="text-base font-medium mb-3 block">Service Type</Label>
            {servicesLoading ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="h-6 w-6 animate-spin" />
                <span className="ml-2">Loading services...</span>
              </div>
            ) : (
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  {services?.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      <div className="flex items-center justify-between w-full">
                        <span>{service.name}</span>
                        <Badge variant="secondary" className="ml-2">
                          {service.duration} min
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Your Information
          </CardTitle>
          <CardDescription>Please provide your contact details</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input 
                  id="firstName" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Your first name" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input 
                  id="lastName" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Your last name" 
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com" 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input 
                id="phone" 
                name="phone"
                type="tel" 
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567" 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input 
                id="age" 
                name="age"
                type="number" 
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Your age" 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reasonForVisit">Reason for Visit</Label>
              <Textarea
                id="reasonForVisit"
                name="reasonForVisit"
                value={formData.reasonForVisit}
                onChange={handleInputChange}
                placeholder="Briefly describe what you'd like to discuss..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="insuranceProvider">Insurance Provider (Optional)</Label>
              <Input 
                id="insuranceProvider" 
                name="insuranceProvider"
                value={formData.insuranceProvider}
                onChange={handleInputChange}
                placeholder="Your insurance provider" 
              />
            </div>

            <div className="bg-secondary/20 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Appointment Summary</h4>
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  <strong>Date:</strong> {selectedDate?.toDateString() || "Not selected"}
                </p>
                <p>
                  <strong>Time:</strong> {selectedTime || "Not selected"}
                </p>
                <p>
                  <strong>Service:</strong> {selectedServiceData?.name || "Not selected"}
                </p>
                {selectedServiceData && (
                  <>
                    <p>
                      <strong>Duration:</strong> {selectedServiceData.duration} minutes
                    </p>
                    {selectedServiceData.price && (
                      <p>
                        <strong>Price:</strong> ${selectedServiceData.price}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-accent text-primary-foreground"
              disabled={!selectedDate || !selectedTime || !selectedService || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Booking Appointment...
                </>
              ) : (
                'Book Appointment'
              )}
            </Button>

            <p className="text-sm text-gray-600 text-center">You will receive a confirmation email within 24 hours</p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 