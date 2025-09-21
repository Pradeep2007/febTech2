# FabTech Deployment Guide

This guide covers deploying the FabTech website to various hosting platforms.

## Pre-Deployment Checklist

- [ ] All environment variables are configured
- [ ] Firebase project is set up and configured
- [ ] Application builds successfully (`npm run build`)
- [ ] All features tested locally
- [ ] Admin credentials are secure

## Deployment Options

### 1. Netlify (Recommended)

Netlify offers excellent support for React applications with automatic deployments.

#### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

3. **Or deploy via Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Configure environment variables in Site Settings

#### Environment Variables on Netlify:
- Go to Site Settings → Environment Variables
- Add all variables from your `.env` file

### 2. Vercel

Vercel provides seamless deployment for React applications.

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configure Environment Variables**
   - Go to your project dashboard on vercel.com
   - Navigate to Settings → Environment Variables
   - Add all variables from your `.env` file

### 3. Firebase Hosting

Since you're already using Firebase, hosting on Firebase is a natural choice.

#### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase Hosting**
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Set public directory to `dist`
   - Configure as single-page app: Yes
   - Don't overwrite index.html

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### 4. AWS S3 + CloudFront

For enterprise-level deployment with AWS.

#### Steps:

1. **Create S3 Bucket**
   - Enable static website hosting
   - Configure bucket policy for public read access

2. **Build and Upload**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom error pages for SPA routing

### 5. GitHub Pages

Free hosting option for public repositories.

#### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## Environment Variables Setup

For all deployment platforms, you'll need to set these environment variables:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_ADMIN_EMAIL=admin@fabtech.com
VITE_ADMIN_PASSWORD=your_secure_password
```

## Post-Deployment Configuration

### 1. Custom Domain (Optional)

Most platforms support custom domains:
- **Netlify**: Domains → Add custom domain
- **Vercel**: Settings → Domains
- **Firebase**: Hosting → Connect custom domain

### 2. SSL Certificate

All recommended platforms provide free SSL certificates automatically.

### 3. Performance Optimization

- Enable gzip compression (usually automatic)
- Configure caching headers
- Use CDN for static assets (automatic on most platforms)

## Continuous Deployment

### GitHub Actions (Example)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      env:
        VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
        VITE_FIREBASE_AUTH_DOMAIN: ${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}
        VITE_FIREBASE_PROJECT_ID: ${{ secrets.VITE_FIREBASE_PROJECT_ID }}
        VITE_FIREBASE_STORAGE_BUCKET: ${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}
        VITE_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}
        VITE_FIREBASE_APP_ID: ${{ secrets.VITE_FIREBASE_APP_ID }}
        
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './dist'
        production-branch: main
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Security Considerations

1. **Environment Variables**
   - Never commit `.env` files to version control
   - Use platform-specific environment variable settings
   - Rotate Firebase keys if compromised

2. **Firebase Security Rules**
   - Configure Firestore security rules appropriately
   - Limit admin access to specific email addresses
   - Enable Firebase App Check for additional security

3. **Admin Access**
   - Use strong passwords for admin accounts
   - Consider implementing 2FA
   - Monitor admin access logs

## Monitoring and Analytics

### 1. Firebase Analytics
- Enable Google Analytics in Firebase console
- Track user interactions and page views

### 2. Error Monitoring
- Consider integrating Sentry for error tracking
- Monitor Firebase console for database errors

### 3. Performance Monitoring
- Use Firebase Performance Monitoring
- Monitor Core Web Vitals

## Backup and Recovery

1. **Database Backup**
   - Set up automated Firestore backups
   - Export data regularly

2. **Code Backup**
   - Use Git for version control
   - Tag releases for easy rollback

## Support and Maintenance

- Monitor application performance
- Keep dependencies updated
- Review Firebase usage and costs
- Update content and product information regularly

## Troubleshooting Deployment Issues

### Common Problems:

1. **Build Failures**
   - Check for TypeScript/ESLint errors
   - Verify all dependencies are installed
   - Check environment variables

2. **Firebase Connection Issues**
   - Verify Firebase configuration
   - Check network connectivity
   - Validate API keys

3. **Routing Issues**
   - Configure platform for SPA routing
   - Set up redirects for client-side routing

4. **Performance Issues**
   - Optimize images and assets
   - Enable compression
   - Use lazy loading for components

For additional support, refer to the platform-specific documentation or contact the development team.
