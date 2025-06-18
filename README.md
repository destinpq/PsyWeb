# Psychology Practice Website - Frontend

A modern, responsive website for a psychology practice built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern UI/UX**: Beautiful, professional design with responsive layout
- **Dynamic Content**: Real-time data fetching from NestJS backend
- **Service Management**: Browse therapy services with detailed descriptions
- **Appointment Booking**: Interactive appointment scheduling system
- **Blog System**: Psychology articles and insights
- **Contact Forms**: Multiple contact methods with form validation
- **Admin Integration**: Connected to comprehensive admin panel
- **Role-Based Access**: Patient and admin user roles
- **Email Notifications**: Automated email confirmations and replies

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui components
- **State Management**: React Hooks & Context
- **API Integration**: Custom API client with error handling
- **Authentication**: JWT-based authentication
- **Form Handling**: React Hook Form with Zod validation

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/destinpq/psychology-website-fe.git
cd psychology-website-fe

# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env.local

# Run development server
yarn dev
```

## 🔧 Environment Setup

Create a `.env.local` file with:

```bash
NEXT_PUBLIC_API_URL=http://localhost:13001/api
```

For production, update the API URL to your deployed backend.

## 🏗️ Project Structure

```
psychology-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── admin/             # Admin panel pages
│   ├── services/          # Services pages
│   └── contact/           # Contact page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── forms/            # Form components
│   ├── layouts/          # Layout components
│   └── sections/         # Page sections
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and configurations
│   ├── api.ts           # API client
│   ├── auth.ts          # Authentication helpers
│   └── utils.ts         # Utility functions
├── public/               # Static assets
└── styles/              # Additional stylesheets
```

## 🎨 Key Components

### Homepage Sections
- **Hero**: Professional introduction with call-to-action
- **About**: Therapist background and credentials
- **Services**: Therapy services with pricing
- **Accomplishments**: Achievements and certifications
- **Blog Preview**: Latest psychology articles
- **Contact**: Multiple contact methods

### Admin Panel
- **Dashboard**: Analytics and quick actions
- **User Management**: Patient and staff management
- **Appointment Management**: Schedule and status tracking
- **Service Management**: Therapy service configuration
- **Blog Management**: Content creation and editing
- **Message Management**: Contact form responses

### Features
- **Responsive Design**: Mobile-first approach
- **Dynamic Content**: Real-time data from API
- **Form Validation**: Client-side and server-side validation
- **Error Handling**: Comprehensive error management
- **Loading States**: Smooth user experience with loading indicators
- **Image Optimization**: Next.js optimized images

## 🔌 API Integration

The frontend integrates with a NestJS backend providing:

- **Authentication**: JWT-based login/logout
- **User Management**: Role-based access control
- **Appointments**: CRUD operations with status tracking
- **Services**: Dynamic service management
- **Blog Posts**: Content management system
- **Contact Messages**: Form submission handling
- **File Uploads**: Image upload for blog posts and profiles

## 🎯 Key Features

### Patient Experience
- Browse therapy services and pricing
- Book appointments with real-time availability
- Contact therapist through multiple channels
- Read psychology blog articles
- Responsive design for all devices

### Admin Experience
- Comprehensive dashboard with analytics
- Manage users, appointments, and services
- Create and edit blog content
- Respond to contact messages
- Upload and manage media files

## 🚀 Deployment

### Development
```bash
yarn dev
```

### Production Build
```bash
yarn build
yarn start
```

### Environment Variables
- `NEXT_PUBLIC_API_URL`: Backend API endpoint
- Additional environment variables as needed

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 375px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🧪 Testing

```bash
# Run tests (if implemented)
yarn test

# Run linting
yarn lint

# Type checking
yarn type-check
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Related Projects

- **Backend API**: [psychology-website-be](https://github.com/destinpq/ecc_be)
- **Admin Panel**: Integrated within this frontend application

## 📞 Support

For support and questions:
- Email: support@psychology-website.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues](https://github.com/destinpq/psychology-website-fe/issues) # PsyWeb
