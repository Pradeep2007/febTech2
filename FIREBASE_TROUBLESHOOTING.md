# Firebase Permission Issues - Quick Fix Guide

## Current Issue: "Missing or insufficient permissions"

This error occurs because your app uses localStorage-based authentication, but your Firestore security rules expect Firebase Authentication.

## Immediate Solution (5 minutes)

### Step 1: Apply Permissive Rules
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `fabtech-inc`
3. Go to **Firestore Database** → **Rules**
4. Replace the current rules with this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

5. Click **Publish**

### Step 2: Test Your App
- Try adding/editing FAQs, products, etc.
- The permission errors should be gone

## Why This Happened

Your app uses a custom authentication system (localStorage) instead of Firebase Auth:
- **Your auth**: Stores admin status in browser localStorage
- **Firebase rules expected**: Firebase Authentication tokens
- **Result**: Permission denied errors

## Long-term Solutions

### Option 1: Keep Current Auth (Easier)
Use the production rules from `firestore.rules.production` which:
- Allow public read access to content
- Restrict write operations (admin only through your app)

### Option 2: Migrate to Firebase Auth (More Secure)
Update your `AuthContext.jsx` to use Firebase Authentication:
- Better security
- Proper user management
- Works with Firebase security rules

## Files Created for You

- `firestore.rules` - Current permissive rules (for immediate fix)
- `firestore.rules.dev` - Original secure rules (needs Firebase Auth)
- `firestore.rules.production` - Secure rules for your current auth system
- `storage.rules` - Storage security rules

## Quick Commands

```bash
# Test your app after applying rules
npm run dev

# Build for production
npm run build
```

## Still Having Issues?

1. Check browser console for specific error messages
2. Verify your `.env` file has all Firebase config values
3. Make sure you published the rules in Firebase Console
4. Clear browser cache and localStorage

## Contact

If you're still having issues, share the specific error message from your browser console.
