'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Heart, Users, Lightbulb, Shield, Clock } from "lucide-react"
import { useServices } from "@/hooks/use-api"
import { Skeleton } from "@/components/ui/skeleton"

const serviceIcons = {
  "Individual Therapy": Brain,
  "Couples Therapy": Heart,
  "Family Therapy": Users,
  "Cognitive Behavioral Therapy": Lightbulb,
  "Initial Consultation": Clock,
  "Trauma-Informed Care": Shield,
  "Crisis Intervention": Clock,
} as const;

const defaultIcon = Brain;

export function Services() {
  const { data: services, loading, error } = useServices();

  if (loading) {
    return (
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Offered</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mental health services tailored to meet your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <Skeleton className="h-10 w-10 mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {Array.from({ length: 4 }).map((_, idx) => (
                      <Skeleton key={idx} className="h-4 w-full" />
                    ))}
                  </div>
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Offered</h2>
            <p className="text-xl text-red-600 max-w-3xl mx-auto">
              Unable to load services at this time. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Offered</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health services tailored to meet your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => {
            const IconComponent = serviceIcons[service.name as keyof typeof serviceIcons] || defaultIcon;
            const features = service.features ? JSON.parse(service.features) : [];
            
            return (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <IconComponent className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <p><strong>Duration:</strong> {service.duration} minutes</p>
                    {service.price && (
                      <p><strong>Price:</strong> ${service.price}</p>
                    )}
                  </div>
                  <Button variant="outline" className="w-full">
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
