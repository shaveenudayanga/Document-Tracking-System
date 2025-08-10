import React, { createContext, useContext, useEffect, useState } from "react";
import { login as apiLogin, getProfile } from "../services/api";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      if (token) {
        try {
          // decode token for quick info
          const decoded = jwtDecode(token);
          setUser(decoded);
          // optionally, fetch profile from server
          // const prof = await getProfile(token);
          // setUser(prof);
        } catch (err) {
          console.warn("Invalid token", err);
          setToken(null);
          setUser(null);
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };
    init();
  }, [token]);

  const login = async (email, password) => {
    const res = await apiLogin(email, password);
    if (res?.token) {
      localStorage.setItem("token", res.token);
      setToken(res.token);
      const decoded = jwtDecode(res.token);
      setUser(decoded);
      return { ok: true };
    } else {
      return { ok: false, message: res?.message || "Login failed" };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
