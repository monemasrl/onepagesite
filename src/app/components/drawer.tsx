"use client";
import style from "./components.module.scss";
import { useContext } from "react";
import { Context } from "../context/context";
import { LuX } from "react-icons/lu";
import ListStaff from "./listStaff";
import { AnimatePresence, motion } from "framer-motion";
import FormContatti from "./formContatti";
import { ItemsSitesStaff } from "../../generated2";

function Drawer({
  staff,
}: {
  staff?: (ItemsSitesStaff | undefined)[] | undefined;
}) {
  const data = useContext(Context);

  return (
    <>
      <AnimatePresence>
        {data?.drawer && (
          <motion.section
            className={style.drawer}
            initial={{ opacity: 0, right: "-100%" }}
            animate={{ opacity: 1, right: 0 }}
            exit={{ opacity: 0, right: "-100%" }}
          >
            <div className={style.drawer__close}>
              <button onClick={() => data?.setDrawer(false)}>
                <LuX />
              </button>
              {data?.dataDrawer === "STAFF" && staff && (
                <ListStaff list={staff} />
              )}
              {data?.dataDrawer === "CONTATTI" && <FormContatti />}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

export default Drawer;
