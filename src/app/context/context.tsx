"use client";
import { createContext, useState } from "react";
import { Tstate } from "../types/types";

const Context = createContext<Tstate | null>(null);

function ContextProvider({ children }: { children: JSX.Element }) {
  const [drawer, setDrawer] = useState(false);
  const [dataDrawer, setDataDrawer] = useState<string | null>(null);
  const [splash, setSplash] = useState(true);
  const state: Tstate = {
    drawer: drawer,
    setDrawer: setDrawer,
    dataDrawer: dataDrawer,
    setDataDrawer: setDataDrawer,
    splash: splash,
    setSplash: setSplash,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
