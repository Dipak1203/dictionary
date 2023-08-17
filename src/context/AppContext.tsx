import React, { createContext, useState, useMemo } from 'react';

interface AppContextType {
  selectedInfo: any;
  setSelectedInfo: React.Dispatch<React.SetStateAction<any>>;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [selectedInfo, setSelectedInfo] = useState<any>(null);

  // Memoize the context value
  const contextValue = useMemo(() => ({ selectedInfo, setSelectedInfo }), [selectedInfo, setSelectedInfo]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
