# FabTech Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

You can download Node.js from [nodejs.org](https://nodejs.org/)

## Step-by-Step Installation

### 1. Verify Prerequisites

Open your terminal/command prompt and run:

```bash
node --version
npm --version
```

You should see version numbers for both commands.

### 2. Navigate to Project Directory

```bash
cd C:\Users\ASUS\OneDrive\Desktop\FabTech
```

### 3. Install Dependencies

```bash
npm install
```

This will install all the required packages listed in `package.json`.

### 4. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   copy .env.example .env
   ```

2. Edit the `.env` file with your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_actual_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
   ```

### 5. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable **Firestore Database**
4. Enable **Authentication** with Email/Password
5. Copy your project configuration to the `.env` file

### 6. Start Development Server

```bash
npm run dev
```

The application will start on `http://localhost:3000`

### 7. Build for Production

```bash
npm run build
```

This creates a `dist` folder with production-ready files.

## Troubleshooting

### Common Issues

1. **Node.js not found**
   - Install Node.js from nodejs.org
   - Restart your terminal after installation

2. **Permission errors on Windows**
   - Run terminal as Administrator
   - Or use `npm install --no-optional`

3. **Firebase connection issues**
   - Verify your `.env` file has correct Firebase config
   - Check Firebase project settings
   - Ensure Firestore and Authentication are enabled

4. **Port already in use**
   - The dev server will automatically try the next available port
   - Or specify a different port: `npm run dev -- --port 3001`

### Getting Help

If you encounter issues:

1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Ensure Firebase services are properly configured
4. Check that all dependencies installed successfully

## Next Steps

After successful installation:

1. Visit `http://localhost:3000` to see the website
2. Go to `/admin` to access the admin dashboard
3. Use the demo credentials:
   - Email: admin@fabtech.com
   - Password: admin123

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
FabTech/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── context/       # React context
│   ├── services/      # API services
│   ├── config/        # Configuration files
│   └── ...
├── public/            # Static assets
├── .env              # Environment variables
└── package.json      # Dependencies and scripts
```
