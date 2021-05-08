import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState({
    user: { id: 38 },
    isAuth: true,
  });

  return (
    <AuthContext.Provider value={{ ...authStatus, setAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
