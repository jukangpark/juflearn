"use client";

import { ThemeProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ThemeProviderProps) => {
  return <ThemeProvider> {children}</ThemeProvider>;
};

export default Providers;
