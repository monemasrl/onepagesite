"use client";
import { createContext, useState } from "react";

type Tstate = {
  drawer: boolean;
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const Context = createContext<Tstate | null>(null);

function ContextProvider({ children }: { children: JSX.Element }) {
  const [drawer, setDrawer] = useState(false);

  const state: Tstate = {
    drawer: drawer,
    setDrawer: setDrawer,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
