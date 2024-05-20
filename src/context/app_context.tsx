"use client";

import React, { ReactNode, useState, createContext } from "react";

interface State {
  user: { name: string; email: string } | null;
  isOpen: boolean;
}

export interface ContextValue {
  state: State;
  updateUser: (user: { name: string; email: string } | null) => void;
  toggleIsOpen: () => void;
}

const defaultState: State = {
  user: null,
  isOpen: false,
};

const defaultContextValue: ContextValue = {
  state: defaultState,
  updateUser: () => {},
  toggleIsOpen: () => {},
};

export const AppContext = createContext<ContextValue>(defaultContextValue);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setState] = useState<State>({
    user: null,
    isOpen: false,
  });

  const updateUser = (user: { name: string; email: string } | null) => {
    setState((prevState) => ({ ...prevState, user }));
  };

  const toggleIsOpen = () => {
    setState((prevState) => ({
      ...prevState,
      isOpen: prevState.isOpen === false ? true : false,
    }));
  };

  return (
    <AppContext.Provider value={{ state, updateUser, toggleIsOpen }}>
      {children}
    </AppContext.Provider>
  );
};
