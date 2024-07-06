import React, { createContext, useState, ReactNode } from "react";

export interface loginData {
  email: string;
  password: string;
}

export interface AuthContextType {
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const defaultValues: AuthContextType = {
  errorMessage: "",
  setErrorMessage: () => {
    ("");
  },
};

const AuthContext = createContext<AuthContextType>(defaultValues);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <AuthContext.Provider
      value={{
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
