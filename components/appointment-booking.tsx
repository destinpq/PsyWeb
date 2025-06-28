"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Clock, User, CalendarIcon, Heart, Sparkles, CheckCircle } from "lucide-react"

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

const serviceTypes = [
  { value: "individual", label: "Individual Therapy", duration: "50 minutes" },
  { value: "couples", label: "Couples Therapy", duration: "60 minutes" },
  { value: "family", label: "Family Therapy", duration: "60 minutes" },
  { value: "consultation", label: "Initial Consultation", duration: "30 minutes" },
]

export function AppointmentBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedService, setSelectedService] = useState<string>("")

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule your session with Dr. Akanksha Agarwal
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Date & Time */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-blue-600" />
                Select Date & Time
              </CardTitle>
              <CardDescription>Choose your preferred appointment slot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Calendar */}
              <div>
                <Label className="text-base font-medium mb-3 block">Select Date</Label>
                <div className="border rounded-lg p-4 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <button 
                      type="button"
                      onClick={() => {
                        const newDate = new Date(selectedDate || new Date())
                        newDate.setMonth(newDate.getMonth() - 1)
                        setSelectedDate(newDate)
                      }}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      ←
                    </button>
                    <h3 className="font-semibold">
                      {selectedDate?.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) || 
                       new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </h3>
                    <button 
                      type="button"
                      onClick={() => {
                        const newDate = new Date(selectedDate || new Date())
                        newDate.setMonth(newDate.getMonth() + 1)
                        setSelectedDate(newDate)
                      }}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      →
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 42 }, (_, i) => {
                      const date = new Date(selectedDate?.getFullYear() || new Date().getFullYear(), 
                                           selectedDate?.getMonth() || new Date().getMonth(), 1)
                      const firstDay = date.getDay()
                      const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
                      const dayNumber = i - firstDay + 1
                      
                      if (i < firstDay || dayNumber > daysInMonth) {
                        return <div key={i} className="p-2"></div>
                      }
                      
                      const currentDate = new Date(date.getFullYear(), date.getMonth(), dayNumber)
                      const isToday = currentDate.toDateString() === new Date().toDateString()
                      const isSelected = currentDate.toDateString() === selectedDate?.toDateString()
                      const isPast = currentDate.getTime() < new Date().setHours(0,0,0,0)
                      const isSunday = currentDate.getDay() === 0
                      
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setSelectedDate(currentDate)}
                          disabled={isPast || isSunday}
                          className={`p-2 text-center text-sm rounded ${
                            isSelected 
                              ? 'bg-blue-600 text-white' 
                              : isPast || isSunday
                                ? 'text-gray-300 cursor-not-allowed'
                                : isToday
                                  ? 'bg-blue-100 text-blue-600 font-medium'
                                  : 'hover:bg-blue-50'
                          }`}
                        >
                          {dayNumber}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <Label className="text-base font-medium mb-3 block">Available Times</Label>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className={selectedTime === time ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"}
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      {time}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Service Type */}
              <div>
                <Label className="text-base font-medium mb-3 block">Service Type</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        <div className="flex items-center justify-between w-full">
                          <span>{service.label}</span>
                          <Badge variant="secondary" className="ml-2">
                            {service.duration}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Contact Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-green-600" />
                Your Information
              </CardTitle>
              <CardDescription>Please provide your contact details</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name *</Label>
                    <Input id="first-name" placeholder="Your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name *</Label>
                    <Input id="last-name" placeholder="Your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="Your age" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Visit</Label>
                  <Textarea
                    id="reason"
                    placeholder="Briefly describe what you'd like to discuss..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="insurance">Insurance Provider (Optional)</Label>
                  <Input id="insurance" placeholder="Your insurance provider" />
                </div>

                {/* Appointment Summary */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    Appointment Summary
                  </h4>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-medium">{selectedDate?.toDateString() || "Not selected"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span className="font-medium">{selectedTime || "Not selected"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-medium">
                        {serviceTypes.find((s) => s.value === selectedService)?.label || "Not selected"}
                      </span>
                    </div>
                    {selectedService && (
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">
                          {serviceTypes.find((s) => s.value === selectedService)?.duration}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!selectedDate || !selectedTime || !selectedService}
                >
                  Book Appointment
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  You will receive a confirmation email within 24 hours
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
