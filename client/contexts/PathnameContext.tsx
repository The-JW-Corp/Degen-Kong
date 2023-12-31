import { createContext, useContext, ReactNode } from "react";

interface PathnameContextType {
  pathname: string;
}

const PathnameContext = createContext<PathnameContextType | null>(null);

export function usePathnameContext() {
  const context = useContext(PathnameContext);
  if (!context) {
    throw new Error(
      "usePathnameContext must be used within a PathnameProvider"
    );
  }
  return context;
}

interface PathnameProviderProps {
  children: ReactNode;
  pathname: string; // Ajout de la prop pathname
}

export function PathnameProvider({ children, pathname }: PathnameProviderProps) {
  return (
    <PathnameContext.Provider value={{ pathname }}>
      {children}
    </PathnameContext.Provider>
  );
}

export default PathnameContext;
