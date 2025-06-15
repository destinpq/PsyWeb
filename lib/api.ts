const API_BASE_URL = typeof window !== 'undefined' 
  ? process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
  : 'http://localhost:3001/api';

// Types based on backend entities
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  age?: number;
  role: 'admin' | 'patient' | 'therapist' | 'staff' | 'manager';
  isActive: boolean;
  address?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
  dateOfBirth?: string;
  gender?: string;
  occupation?: string;
  profilePicture?: string;
  notes?: string;
  createdAt: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price?: number;
  isActive: boolean;
  features?: string;
  createdAt: string;
}

export interface Appointment {
  id: string;
  appointmentDate: string;
  appointmentTime: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show';
  reasonForVisit?: string;
  insuranceProvider?: string;
  notes?: string;
  patientId: string;
  serviceId: string;
  patient?: User;
  service?: Service;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  status: 'unread' | 'read' | 'replied' | 'archived';
  reply?: string;
  repliedAt?: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime?: string;
  status: 'draft' | 'published' | 'archived';
  featuredImage?: string;
  tags?: string;
  publishedAt?: string;
  createdAt: string;
}

export interface CreateUserData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  age?: number;
  address?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
  dateOfBirth?: string;
  gender?: string;
  occupation?: string;
  notes?: string;
}

export interface CreateAppointmentData {
  appointmentDate: string;
  appointmentTime: string;
  patientId: string;
  serviceId: string;
  reasonForVisit?: string;
  insuranceProvider?: string;
}

export interface CreateContactMessageData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export interface AuthResponse {
  access_token: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
}

// API client class
class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    // Get token from localStorage on client side
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('auth_token');
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Add any additional headers
    if (options.headers) {
      Object.assign(headers, options.headers);
    }

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  setToken(token: string) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token);
    }
  }

  clearToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
  }

  // Auth endpoints
  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    this.setToken(response.access_token);
    return response;
  }

  // User endpoints
  async createUser(userData: CreateUserData): Promise<User> {
    return this.request<User>('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async getUsers(): Promise<User[]> {
    return this.request<User[]>('/users');
  }

  async getUser(id: string): Promise<User> {
    return this.request<User>(`/users/${id}`);
  }

  // Service endpoints
  async getServices(): Promise<Service[]> {
    return this.request<Service[]>('/services');
  }

  async getService(id: string): Promise<Service> {
    return this.request<Service>(`/services/${id}`);
  }

  // Appointment endpoints
  async createAppointment(appointmentData: CreateAppointmentData): Promise<Appointment> {
    return this.request<Appointment>('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData),
    });
  }

  async getAppointments(): Promise<Appointment[]> {
    return this.request<Appointment[]>('/appointments');
  }

  async getAppointment(id: string): Promise<Appointment> {
    return this.request<Appointment>(`/appointments/${id}`);
  }

  async getPatientAppointments(patientId: string): Promise<Appointment[]> {
    return this.request<Appointment[]>(`/appointments/patient/${patientId}`);
  }

  async getAvailableTimeSlots(date: string): Promise<string[]> {
    return this.request<string[]>(`/appointments/available-slots?date=${date}`);
  }

  // Contact endpoints
  async createContactMessage(messageData: CreateContactMessageData): Promise<ContactMessage> {
    return this.request<ContactMessage>('/contact', {
      method: 'POST',
      body: JSON.stringify(messageData),
    });
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return this.request<ContactMessage[]>('/contact');
  }

  async getContactMessage(id: string): Promise<ContactMessage> {
    return this.request<ContactMessage>(`/contact/${id}`);
  }

  // Blog endpoints
  async getBlogPosts(): Promise<BlogPost[]> {
    return this.request<BlogPost[]>('/blog');
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return this.request<BlogPost[]>('/blog/published');
  }

  async getBlogPost(id: string): Promise<BlogPost> {
    return this.request<BlogPost>(`/blog/${id}`);
  }

  // Admin CRUD operations
  // User management
  async updateUser(id: string, userData: Partial<CreateUserData>): Promise<User> {
    return this.request<User>(`/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(userData),
    });
  }

  async deleteUser(id: string): Promise<void> {
    return this.request<void>(`/users/${id}`, {
      method: 'DELETE',
    });
  }

  // Service management
  async createService(serviceData: Omit<Service, 'id' | 'createdAt'>): Promise<Service> {
    return this.request<Service>('/services', {
      method: 'POST',
      body: JSON.stringify(serviceData),
    });
  }

  async updateService(id: string, serviceData: Partial<Service>): Promise<Service> {
    return this.request<Service>(`/services/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(serviceData),
    });
  }

  async deleteService(id: string): Promise<void> {
    return this.request<void>(`/services/${id}`, {
      method: 'DELETE',
    });
  }

  // Appointment management
  async updateAppointment(id: string, appointmentData: Partial<Appointment>): Promise<Appointment> {
    return this.request<Appointment>(`/appointments/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(appointmentData),
    });
  }

  async deleteAppointment(id: string): Promise<void> {
    return this.request<void>(`/appointments/${id}`, {
      method: 'DELETE',
    });
  }

  // Contact message management
  async updateContactMessage(id: string, messageData: Partial<ContactMessage>): Promise<ContactMessage> {
    return this.request<ContactMessage>(`/contact/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(messageData),
    });
  }

  async deleteContactMessage(id: string): Promise<void> {
    return this.request<void>(`/contact/${id}`, {
      method: 'DELETE',
    });
  }

  // Blog post management
  async createBlogPost(blogData: Omit<BlogPost, 'id' | 'createdAt' | 'publishedAt'>): Promise<BlogPost> {
    return this.request<BlogPost>('/blog', {
      method: 'POST',
      body: JSON.stringify(blogData),
    });
  }

  async updateBlogPost(id: string, blogData: Partial<BlogPost>): Promise<BlogPost> {
    return this.request<BlogPost>(`/blog/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(blogData),
    });
  }

  async deleteBlogPost(id: string): Promise<void> {
    return this.request<void>(`/blog/${id}`, {
      method: 'DELETE',
    });
  }

  async publishBlogPost(id: string): Promise<BlogPost> {
    return this.request<BlogPost>(`/blog/${id}/publish`, {
      method: 'PATCH',
    });
  }

  async unpublishBlogPost(id: string): Promise<BlogPost> {
    return this.request<BlogPost>(`/blog/${id}/unpublish`, {
      method: 'PATCH',
    });
  }

  // File upload
  async uploadImage(file: File): Promise<{ url: string; filename: string; originalName: string; size: string; mimetype: string }> {
    const formData = new FormData();
    formData.append('image', file);

    const headers: Record<string, string> = {};
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(`${this.baseUrl}/upload/image`, {
      method: 'POST',
      body: formData,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}

// Export singleton instance
export const apiClient = new ApiClient(API_BASE_URL);

// Export individual functions for easier use
export const api = {
  // Auth
  login: (email: string, password: string) => apiClient.login(email, password),
  logout: () => apiClient.clearToken(),

  // Users
  createUser: (userData: CreateUserData) => apiClient.createUser(userData),
  getUsers: () => apiClient.getUsers(),
  getUser: (id: string) => apiClient.getUser(id),

  // Services
  getServices: () => apiClient.getServices(),
  getService: (id: string) => apiClient.getService(id),

  // Appointments
  createAppointment: (data: CreateAppointmentData) => apiClient.createAppointment(data),
  getAppointments: () => apiClient.getAppointments(),
  getAppointment: (id: string) => apiClient.getAppointment(id),
  getPatientAppointments: (patientId: string) => apiClient.getPatientAppointments(patientId),
  getAvailableTimeSlots: (date: string) => apiClient.getAvailableTimeSlots(date),

  // Contact
  createContactMessage: (data: CreateContactMessageData) => apiClient.createContactMessage(data),
  getContactMessages: () => apiClient.getContactMessages(),
  getContactMessage: (id: string) => apiClient.getContactMessage(id),

  // Blog
  getBlogPosts: () => apiClient.getBlogPosts(),
  getPublishedBlogPosts: () => apiClient.getPublishedBlogPosts(),
  getBlogPost: (id: string) => apiClient.getBlogPost(id),

  // Admin functions
  // User management
  updateUser: (id: string, userData: Partial<CreateUserData>) => apiClient.updateUser(id, userData),
  deleteUser: (id: string) => apiClient.deleteUser(id),

  // Service management
  createService: (serviceData: Omit<Service, 'id' | 'createdAt'>) => apiClient.createService(serviceData),
  updateService: (id: string, serviceData: Partial<Service>) => apiClient.updateService(id, serviceData),
  deleteService: (id: string) => apiClient.deleteService(id),

  // Appointment management
  updateAppointment: (id: string, appointmentData: Partial<Appointment>) => apiClient.updateAppointment(id, appointmentData),
  deleteAppointment: (id: string) => apiClient.deleteAppointment(id),

  // Contact message management
  updateContactMessage: (id: string, messageData: Partial<ContactMessage>) => apiClient.updateContactMessage(id, messageData),
  deleteContactMessage: (id: string) => apiClient.deleteContactMessage(id),

  // Blog post management
  createBlogPost: (blogData: Omit<BlogPost, 'id' | 'createdAt' | 'publishedAt'>) => apiClient.createBlogPost(blogData),
  updateBlogPost: (id: string, blogData: Partial<BlogPost>) => apiClient.updateBlogPost(id, blogData),
  deleteBlogPost: (id: string) => apiClient.deleteBlogPost(id),
  publishBlogPost: (id: string) => apiClient.publishBlogPost(id),
  unpublishBlogPost: (id: string) => apiClient.unpublishBlogPost(id),

  // File upload
  uploadImage: (file: File) => apiClient.uploadImage(file),
};

export default apiClient; 