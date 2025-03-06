import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { decryptData, encryptData } from "../utils/encryptation";

interface User {
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (role: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const decryptedUser = decryptData(storedUser);
      setUser(decryptedUser);
    }
    setLoading(false);
  }, []);

  const login = (role: string) => {
    const userData: User = { role };
    setUser(userData);
    const encryptedUser = encryptData(userData);
    localStorage.setItem("user", encryptedUser);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};