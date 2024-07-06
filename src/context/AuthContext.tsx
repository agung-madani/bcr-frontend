import React, { createContext, useState, ReactNode } from "react";
import axios, { AxiosError } from "axios";

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthContextType {
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  login: (data: LoginData) => Promise<void>;
}

const defaultValues: AuthContextType = {
  errorMessage: "",
  setErrorMessage: () => {},
  login: async () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultValues);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const login = async (data: LoginData) => {
    try {
      const response = await axios.post(
        "https://collective-kristel-sawangan-26-6deb48bd.koyeb.app/login",
        data
      );
      localStorage.setItem("tokenBinar", response.data.token);
      setErrorMessage("");
      // Use router history for navigation instead of window.location.href
      // Example: history.push("/cars-management");
      window.location.href = "/cars-management";
    } catch (error: any) {
      handleLoginError(error);
    }
  };

  const handleLoginError = (error: AxiosError<any>) => {
    if (error.response) {
      setErrorMessage(error.response.data.message);
    }
    throw error;
  };

  return (
    <AuthContext.Provider
      value={{
        errorMessage,
        setErrorMessage,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
