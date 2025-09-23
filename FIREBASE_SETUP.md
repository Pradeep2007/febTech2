# Firebase Setup Guide for Production

## 1. Environment Variables Setup

Make sure your `.env` file contains the following Firebase configuration variables with your actual Firebase project values:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyCAont5TpzD7XY_qvzpzn6TFmjOFzN7mPU
VITE_FIREBASE_AUTH_DOMAIN=fabtech-inc.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=fabtech-inc
VITE_FIREBASE_STORAGE_BUCKET=fabtech-inc.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=210565692041
VITE_FIREBASE_APP_ID=1:210565692041:web:ceaf7fea894c66c306a458
VITE_FIREBASE_MEASUREMENT_ID=G-KY9N9WNVSR
```

## 2. Firebase Security Rules Setup

**IMPORTANT**: Your app uses localStorage-based authentication, not Firebase Auth. This affects which security rules you need to use.

### For Development/Testing (Permissive Rules) - CURRENT SETUP
Since your app doesn't use Firebase Authentication, you need permissive rules for now:

1. Go to Firebase Console → Firestore Database → Rules
2. Copy the contents of `firestore.rules` (the current permissive rules) and paste them
3. Publish the rules

### For Production (Secure Rules) - FUTURE SETUP
When ready for production, you have two options:

**Option A: Keep localStorage auth (Recommended for now)**
1. Use the rules from `firestore.rules.production`
2. This allows public read access but restricts writes
3. Admin operations are handled through your app's authentication

**Option B: Migrate to Firebase Authentication (More secure)**
1. Update your AuthContext to use Firebase Auth instead of localStorage
2. Use the rules from `firestore.rules.dev` (the original secure rules)
3. This provides proper user authentication and authorization

### Firebase Storage Rules
1. Go to Firebase Console → Storage → Rules
2. Copy the contents of `storage.rules` and paste them
3. Publish the rules

## 3. Firebase Authentication Setup

Make sure Firebase Authentication is enabled:

1. Go to Firebase Console → Authentication
2. Enable the "Email/Password" sign-in method
3. Add your admin email in the "Users" tab if needed

## 4. Firestore Database Setup

1. Go to Firebase Console → Firestore Database
2. Create the database in production mode
3. Choose your preferred region
4. Apply the security rules as mentioned above

## 5. Firebase Storage Setup

1. Go to Firebase Console → Storage
2. Get started with Cloud Storage
3. Choose your preferred region
4. Apply the storage rules as mentioned above

## 6. Testing the Setup

After completing the setup:

1. Build your application: `npm run build`
2. Test the production build: `npm run preview`
3. Check browser console for any Firebase configuration errors
4. Test data operations (create, read, update, delete)

## 7. Common Permission Issues and Solutions

### Issue: "Missing or insufficient permissions"
**Solution**: Make sure your Firestore rules are properly configured and published.

### Issue: "Firebase configuration is missing"
**Solution**: Check that all environment variables are properly set in your `.env` file.

### Issue: "Auth domain not authorized"
**Solution**: Add your domain to the authorized domains list in Firebase Console → Authentication → Settings → Authorized domains.

## 8. Production Deployment Checklist

- [ ] Environment variables are set correctly
- [ ] Firebase security rules are applied and tested
- [ ] Authentication is properly configured
- [ ] Storage rules are applied
- [ ] Domain is added to authorized domains list
- [ ] Analytics is configured (optional)
- [ ] All Firebase services are enabled in your project

## 9. Monitoring and Maintenance

- Monitor Firebase usage in the console
- Set up billing alerts if needed
- Regularly review and update security rules
- Monitor authentication logs for suspicious activity
