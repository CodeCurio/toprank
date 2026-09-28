"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type AdminTheme = "light" | "dark";

interface AdminThemeContextType {
  theme: AdminTheme;
  toggleTheme: () => void;
  setTheme: (theme: AdminTheme) => void;
  isLight: boolean;
}

const AdminThemeContext = createContext<AdminThemeContextType | undefined>(undefined);

export function AdminThemeProvider({ children }: { children: React.ReactNode }) {
  // Default to light theme
  const [theme, setThemeState] = useState<AdminTheme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("toprank_admin_theme");
      if (saved === "dark" || saved === "light") {
        setThemeState(saved);
      } else {
        setThemeState("light");
      }
    } catch (e) {
      setThemeState("light");
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: AdminTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("toprank_admin_theme", newTheme);
    } catch (e) {}
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AdminThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        isLight: theme === "light",
      }}
    >
      <div
        data-admin-theme={theme}
        className={theme === "light" ? "admin-light-mode text-slate-900 bg-slate-50" : "admin-dark-mode dark text-slate-100 bg-slate-950"}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </div>
    </AdminThemeContext.Provider>
  );
}

export function useAdminTheme() {
  const context = useContext(AdminThemeContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      theme: "light" as AdminTheme,
      toggleTheme: () => {},
      setTheme: () => {},
      isLight: true,
    };
  }
  return context;
}
