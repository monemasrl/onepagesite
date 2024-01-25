"use client";
import style from "./components.module.scss";
import { useContext } from "react";
import { Context } from "../context/context";
import { LuX } from "react-icons/lu";

function Drawer({ children }: { children: JSX.Element }) {
  const data = useContext(Context);
  console.log(data);
  return (
    <>
      {data?.drawer && (
        <section className={style.drawer}>
          <div className={style.drawer__close}>
            <button onClick={() => data?.setDrawer(false)}>
              <LuX />
            </button>
            {children}
          </div>
        </section>
      )}
    </>
  );
}

export default Drawer;
