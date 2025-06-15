'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import type { Service, BlogPost, Appointment, ContactMessage } from '@/lib/api';

// Generic hook for async operations
export function useAsync<T>(asyncFunction: () => Promise<T>, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    asyncFunction()
      .then((result) => {
        if (isMounted) {
          setData(result);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'An error occurred');
          setData(null);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, deps);

  return { data, loading, error };
}

// Services hooks
export function useServices() {
  return useAsync<Service[]>(() => api.getServices());
}

export function useService(id: string) {
  return useAsync<Service>(() => api.getService(id), [id]);
}

// Blog hooks
export function useBlogPosts() {
  return useAsync<BlogPost[]>(() => api.getPublishedBlogPosts());
}

export function useBlogPost(id: string) {
  return useAsync<BlogPost>(() => api.getBlogPost(id), [id]);
}

// Appointment hooks
export function useAppointments() {
  return useAsync<Appointment[]>(() => api.getAppointments());
}

export function useAvailableTimeSlots(date: string) {
  return useAsync<string[]>(() => api.getAvailableTimeSlots(date), [date]);
}

// Contact message hooks
export function useContactMessages() {
  return useAsync<ContactMessage[]>(() => api.getContactMessages());
}

// Form submission hooks
export function useSubmitForm<T, R>(submitFunction: (data: T) => Promise<R>) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = async (data: T) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await submitFunction(data);
      setSuccess(true);
      return true;
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
    setLoading(false);
  };

  return { submit, loading, error, success, reset };
}

// Specific form hooks
export function useContactForm() {
  return useSubmitForm(api.createContactMessage);
}

export function useAppointmentForm() {
  return useSubmitForm(api.createAppointment);
}

export function useUserForm() {
  return useSubmitForm(api.createUser);
} 