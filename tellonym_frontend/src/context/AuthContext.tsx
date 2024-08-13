import { useState, useContext, createContext, ReactNode } from "react";

// Define the shape of the authentication context
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

// Define the shape of the user data
interface User {
  name: string;
  // Add any other properties you need, e.g., email, role, etc.
}

// Create the AuthContext with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the props for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component that will wrap the application or parts of it
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const isLoggedIn = () => !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
