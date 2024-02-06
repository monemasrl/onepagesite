"use client";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./components.module.scss";
import Image, { StaticImageData } from "next/image";
import { GoArrowRight } from "react-icons/go";
import { type Dispatch, SetStateAction } from "react";
import { Files } from "../generated2/models/Files";

type Tdata = {
  logo?: Files;
  name: string | null | undefined;
  sede?: string;
  contatti?: { telefono?: string; email?: string };
  citta?: string;
  hideInitial: boolean;
  setHideInitial: Dispatch<SetStateAction<boolean>>;
};

function AnimatedWrapper({
  logo,
  name,
  sede,
  contatti,
  citta,
  hideInitial,
  setHideInitial,
}: Tdata) {
  return (
    <AnimatePresence>
      {hideInitial && (
        <motion.div
          className={styles.animateWrapper}
          initial={{
            opacity: 0,
            width: 490,
            height: 270,
            zIndex: 100,
            scale: 0.5,
          }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, zIndex: 0, y: 100 }}
        >
          <motion.div
            variants={{
              start: {
                opacity: 0,
                y: 100,
                transition: { duration: 1 },
              },
              mid: {
                opacity: 1,
                y: 0,
                transition: { duration: 1 },
              },
              end: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="start"
            animate={["mid", "end"]}
          >
            {logo && (
              <Image
                src={`https://cmdb.service.monema.dev/assets/${logo.filename_disk}`}
                alt={logo.description || "imageLogo"}
                width={120}
                height={120}
              />
            )}
          </motion.div>
          <div className={styles.dataStart}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.dataStart__title}
            >
              {name}
            </motion.div>
            {(sede || citta) && (
              <div className={styles.dataStart__sede}>
                {sede}-{citta}
              </div>
            )}
            {contatti && (
              <ul className={styles.dataStart__contatti}>
                {contatti.telefono && <li>Tel. {contatti.telefono}</li>}
                {contatti.email && <li>Mail. {contatti.email}</li>}
              </ul>
            )}
            <div className={styles.dataStart__icon}>
              <motion.div
                onClick={() => setHideInitial(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <GoArrowRight />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default AnimatedWrapper;
