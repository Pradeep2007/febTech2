import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword 
} from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Admin email - you can also store this in environment variables
  const ADMIN_EMAIL = 'psy16198@gmail.com';

  const login = async (email, password) => {
    try {
      console.log('Attempting login with:', email); // Debug log
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', result.user.email); // Debug log
      return result;
    } catch (error) {
      // If user doesn't exist and it's the admin email, try to create it
      if (error.code === 'auth/user-not-found' && email === ADMIN_EMAIL) {
        try {
          console.log('User not found, creating admin user...');
          const createResult = await createUserWithEmailAndPassword(auth, email, password);
          console.log('Admin user created successfully:', createResult.user.email);
          return createResult;
        } catch (createError) {
          console.error('Error creating admin user:', createError);
          throw createError;
        }
      }
      console.error('Login error:', error.code, error.message);
      console.error('Full error object:', error); // More detailed error info
      
      // Provide user-friendly error messages
      let errorMessage = 'Login failed. Please try again.';
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email address.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password. Please try again.';
          break;
        case 'auth/invalid-login-credentials':
          errorMessage = 'Invalid email or password. Please check your credentials.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address format.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many failed attempts. Please try again later.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your internet connection.';
          break;
        default:
          errorMessage = error.message || 'Login failed. Please try again.';
      }
      
      throw new Error(errorMessage);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const signup = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      // Check if the logged-in user is admin
      setIsAdmin(user?.email === ADMIN_EMAIL);
      setLoading(false);
    });

    return unsubscribe;
  }, [ADMIN_EMAIL]);

  const value = {
    currentUser,
    isAdmin,
    login,
    logout,
    signup,
    loading,
    ADMIN_EMAIL
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
