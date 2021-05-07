import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState({ user: {}, isAuth: true });

  return (
    <AuthContext.Provider value={{ ...authStatus, setAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
