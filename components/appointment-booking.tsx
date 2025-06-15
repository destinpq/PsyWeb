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
import { Clock, User, CalendarIcon } from "lucide-react"

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
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
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
            </div>
          </div>

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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Your Information
          </CardTitle>
          <CardDescription>Please provide your contact details</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
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
                  <strong>Service:</strong>{" "}
                  {serviceTypes.find((s) => s.value === selectedService)?.label || "Not selected"}
                </p>
                {selectedService && (
                  <p>
                    <strong>Duration:</strong> {serviceTypes.find((s) => s.value === selectedService)?.duration}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-accent text-primary-foreground"
              disabled={!selectedDate || !selectedTime || !selectedService}
            >
              Book Appointment
            </Button>

            <p className="text-sm text-gray-600 text-center">You will receive a confirmation email within 24 hours</p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
