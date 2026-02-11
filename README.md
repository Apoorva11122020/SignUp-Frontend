# Frontend - Full Stack Authentication App

A modern, responsive web application built with Next.js 14, Redux Toolkit, and TypeScript featuring complete authentication flow and protected routes.

## 🚀 Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Form Validation:** Zod
- **UI Components:** Custom components with Tailwind

## 📁 Project Structure

```
frontend/
├── /public                    # Static assets (images, icons)
├── /src
│   ├── /app                  # Next.js Routing Layer
│   │   ├── (auth)           # Route group for authentication
│   │   │   ├── /signin
│   │   │   │   └── page.tsx
│   │   │   └── /signup
│   │   │       └── page.tsx
│   │   ├── /profile
│   │   │   └── page.tsx
│   │   ├── layout.tsx       # Root layout with providers
│   │   ├── page.tsx         # Landing page
│   │   └── globals.css      # Global styles
│   │
│   ├── /features            # Domain & Logic Layer
│   │   ├── /auth
│   │   │   ├── /components  # LoginForm, SignupForm
│   │   │   ├── /services    # AuthService API calls
│   │   │   ├── /schemas     # Zod validation schemas
│   │   │   ├── /hooks       # useAuth custom hook
│   │   │   └── authSlice.ts # Redux slice for auth
│   │   └── /user
│   │       ├── /components  # ProfileCard
│   │       └── /types       # User interfaces
│   │
│   ├── /components          # Shared UI Layer
│   │   ├── /ui             # Atomic components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Card.tsx
│   │   ├── Navbar.tsx
│   │   └── Providers.tsx
│   │
│   └── /lib                 # Infrastructure Layer
│       ├── axios.ts         # Axios instance & interceptors
│       ├── store.ts         # Redux store configuration
│       ├── hooks.ts         # Redux typed hooks
│       └── utils.ts         # Utility functions
├── .env.local.example       # Environment template
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend API running (see backend README)

### Installation Steps

1. **Navigate to the frontend directory:**

```bash
cd frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment variables:**

Create a `.env.local` file in the root of the frontend directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. **Start the development server:**

```bash
npm run dev
```

The application will start on `http://localhost:3000`

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## ✨ Features

### Authentication
- **Sign Up:** Create new user accounts with validation
- **Sign In:** Secure login with JWT tokens
- **Auto Login:** Persistent sessions using localStorage
- **Protected Routes:** Automatic redirection for authenticated/unauthenticated users

### User Interface
- **Responsive Design:** Mobile-first approach, works on all devices
- **Modern UI:** Clean, professional design with Tailwind CSS
- **Loading States:** Visual feedback during async operations
- **Error Handling:** User-friendly error messages
- **Form Validation:** Client-side validation with Zod schemas

### State Management
- **Redux Toolkit:** Centralized state management
- **Async Actions:** Handling API calls with createAsyncThunk
- **Typed Hooks:** Fully typed Redux hooks for TypeScript safety

### Security
- **JWT Tokens:** Secure token-based authentication
- **HTTP-Only Strategy:** Tokens stored in localStorage
- **Axios Interceptors:** Automatic token injection and error handling
- **Password Validation:** Strong password requirements

## 📄 Pages

### Home Page (`/`)
- Landing page with app introduction
- Call-to-action buttons for Sign Up and Sign In
- Feature showcase

### Sign In (`/signin`)
- Email and password login form
- Form validation with error messages
- Redirect to Sign Up page
- Auto-redirect to profile if already authenticated

### Forgot Password (`/forgot-password`)
- Public page to request a password reset link
- Validates email with Zod
- Shows generic success message to avoid leaking whether an account exists

### Reset Password (`/reset-password?token=...`)
- Page accessed from email link
- Validates new password + confirmation with Zod
- Submits token and new password to backend
- Redirects to sign in after successful reset

### Sign Up (`/signup`)
- Registration form with name, email, and password
- Password strength requirements
- Form validation with error messages
- Redirect to Sign In page
- Auto-redirect to profile if already authenticated

### Profile (`/profile`)
- **Protected Route** - Requires authentication
- Display user information
- User avatar with initials
- Account creation date
- Auto-redirect to sign in if not authenticated

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build       # Build for production
npm start           # Start production server

# Linting
npm run lint        # Run ESLint
```

## 🎨 UI Components

### Button
Versatile button component with variants:
- `primary` - Main action button
- `secondary` - Secondary actions
- `outline` - Outlined style
- `ghost` - Minimal style

Sizes: `sm`, `md`, `lg`

### Input
Form input component with:
- Label support
- Error message display
- Various input types
- Accessible and styled

### Card
Container component for content grouping:
- Card (container)
- CardHeader
- CardTitle
- CardContent

## 🔐 Authentication Flow

1. **Sign Up:**
   - User submits registration form
   - Frontend validates input with Zod
   - API call to `/api/auth/signup`
   - JWT token stored in localStorage
   - User data stored in Redux
   - Redirect to profile page

2. **Sign In:**
   - User submits login form
   - Frontend validates input
   - API call to `/api/auth/login`
   - JWT token stored in localStorage
   - User data stored in Redux
   - Redirect to profile page

3. **Auto Login:**
   - On app load, check for token in localStorage
   - If token exists, fetch user profile
   - Update Redux state with user data
   - User stays logged in across page refreshes

4. **Logout:**
   - Remove token from localStorage
   - Clear Redux state
   - Redirect to home page

5. **Protected Routes:**
   - `useAuth` hook checks authentication status
   - Redirects unauthenticated users to sign in
   - Redirects authenticated users away from auth pages

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Errors:**
   - Verify backend is running on correct port
   - Check `NEXT_PUBLIC_API_URL` in `.env.local`
   - Ensure CORS is properly configured in backend

2. **Authentication Issues:**
   - Clear localStorage and try again
   - Check if JWT token is expired
   - Verify backend JWT_SECRET is configured

3. **Build Errors:**
   - Delete `.next` folder and `node_modules`
   - Run `npm install` again
   - Check for TypeScript errors

4. **Styling Issues:**
   - Ensure Tailwind CSS is properly configured
   - Check if PostCSS is working
   - Verify `globals.css` is imported in layout

## 🌐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:5000/api` |

## 📚 Key Dependencies

- **next:** React framework with App Router
- **react-redux:** React bindings for Redux
- **@reduxjs/toolkit:** State management
- **axios:** HTTP client
- **zod:** Schema validation
- **tailwindcss:** Utility-first CSS framework
- **clsx & tailwind-merge:** Conditional styling utilities

## 🎯 Best Practices Implemented

- **TypeScript:** Full type safety across the application
- **Component Architecture:** Atomic design principles
- **Feature-Based Structure:** Code organized by features
- **Custom Hooks:** Reusable logic extraction
- **Error Boundaries:** Graceful error handling
- **Loading States:** User feedback during async operations
- **Validation:** Client-side form validation
- **Accessibility:** Semantic HTML and ARIA attributes

## 📝 License

This project is created for educational purposes.

## 👤 Author

Built as part of a full-stack web application assignment.

## 🚀 Deployment

### Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

- **Netlify:** Supports Next.js with plugins
- **Railway:** Full-stack deployment
- **AWS Amplify:** Scalable hosting

## 📞 Support

For issues or questions:
1. Check this README
2. Review backend README
3. Check SUPABASE_SETUP.md in backend folder
4. Review Next.js and Redux Toolkit documentation
