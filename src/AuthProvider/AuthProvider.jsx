import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const authInfo = {
  name: 'nur',
  age: 22,
};

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
