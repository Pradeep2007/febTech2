import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Admin credentials from environment variables
  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  // Restore auth state from localStorage on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('fabtech_admin_user');
    const savedIsAdmin = localStorage.getItem('fabtech_admin_status');
    
    if (savedUser && savedIsAdmin === 'true') {
      try {
        const user = JSON.parse(savedUser);
        setCurrentUser(user);
        setIsAdmin(true);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('fabtech_admin_user');
        localStorage.removeItem('fabtech_admin_status');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Debug logging
    console.log('Login attempt:', { email, password });
    console.log('Expected:', { ADMIN_EMAIL, ADMIN_PASSWORD });
    
    // Check both email and password
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const user = { email };
      setCurrentUser(user);
      setIsAdmin(true);
      
      // Persist auth state to localStorage
      localStorage.setItem('fabtech_admin_user', JSON.stringify(user));
      localStorage.setItem('fabtech_admin_status', 'true');
      
      return { user };
    }
    throw new Error('Invalid email or password');
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAdmin(false);
    
    // Clear auth state from localStorage
    localStorage.removeItem('fabtech_admin_user');
    localStorage.removeItem('fabtech_admin_status');
  };

  const signup = (email) => {
    // Allow client to create admin account
    const user = { email };
    setCurrentUser(user);
    setIsAdmin(true);
    
    // Persist auth state to localStorage
    localStorage.setItem('fabtech_admin_user', JSON.stringify(user));
    localStorage.setItem('fabtech_admin_status', 'true');
    
    return { user };
  };

  const value = {
    currentUser,
    isAdmin,
    loading,
    login,
    logout,
    signup,
    ADMIN_EMAIL
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
