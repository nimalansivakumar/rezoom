import React, { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export function AppProvider({ children }) {
  const [user, setUser] = useState({});
  const value = {
    user,
    setUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
