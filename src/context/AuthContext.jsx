import { createContext, useContext, useState } from 'react';

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
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Admin email - you can also store this in environment variables
  const ADMIN_EMAIL = 'psy16198@gmail.com';

  const login = async (email, password) => {
    try {
      // Simple mock login for now
      if (email === ADMIN_EMAIL) {
        setCurrentUser({ email });
        setIsAdmin(true);
        return { user: { email } };
      }
      throw new Error('Invalid credentials');
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      setCurrentUser(null);
      setIsAdmin(false);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const signup = async (email, password) => {
    try {
      // Simple mock signup for now
      setCurrentUser({ email });
      return { user: { email } };
    } catch (error) {
      throw error;
    }
  };

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
      {children}
    </AuthContext.Provider>
  );
};
