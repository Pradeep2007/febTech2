import React, { createContext, useContext, useState } from 'react';

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
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    // Simple mock login
    const adminEmail = 'admin@fabtech.com';
    if (email === adminEmail && password === 'admin123') {
      setCurrentUser({ email });
      setIsAdmin(true);
      return { user: { email } };
    }
    throw new Error('Invalid credentials');
  };

  const logout = async () => {
    setCurrentUser(null);
    setIsAdmin(false);
  };

  const value = {
    currentUser,
    isAdmin,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
