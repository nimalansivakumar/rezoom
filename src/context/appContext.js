import React, { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [signOut, setSignOut] = useState();

  const changeUserState = (user_id, signout) => {
    setUser(user_id);
    setSignOut(signout);
  };

  const value = {
    user,
    setUser,
    changeUserState,
    signOut,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
