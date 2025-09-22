# FabTech Admin Setup Instructions

## Step 1: Environment Configuration

1. **Copy the example environment file:**
   ```bash
   copy .env.example .env
   ```

2. **Update `.env` file with your credentials:**
   ```env
   # Your Admin Login Credentials
   VITE_ADMIN_EMAIL=your-email@example.com
   VITE_ADMIN_PASSWORD=your-secure-password
   
   # Your Cloudinary Details (for image uploads)
   VITE_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   VITE_CLOUDINARY_UPLOAD_PRESET=ml_default
   ```

## Step 2: Get Cloudinary Credentials

1. **Sign up at:** https://cloudinary.com
2. **Get your Cloud Name** from the dashboard
3. **Create upload preset:**
   - Go to Settings → Upload
   - Add upload preset named `ml_default`
   - Set Signing Mode to `Unsigned`

## Step 3: Start the Application

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Login with your credentials:**
   - Email: The email you set in VITE_ADMIN_EMAIL
   - Password: The password you set in VITE_ADMIN_PASSWORD

## Features Available:

- ✅ Product Management (Add, Edit, Delete)
- ✅ Image Upload (via Cloudinary)
- ✅ FAQ Management
- ✅ Brochure Upload

## Support:

If you need help, contact: [your-contact-info]
