"use client";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./components.module.scss";
import Image, { StaticImageData } from "next/image";
import { GoArrowRight } from "react-icons/go";
import { type Dispatch, SetStateAction } from "react";

type Tdata = {
  logo: { url: StaticImageData; alt: string };
  name: string;
  sede: string;
  contatti: { telefono: string; email: string };
  citta: string;
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
          }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
            <Image src={logo.url} alt={logo.alt} width={120} height={120} />
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
            <div className={styles.dataStart__sede}>
              {sede}-{citta}
            </div>
            <ul className={styles.dataStart__contatti}>
              <li>Tel. {contatti.telefono}</li>
              <li>Mail. {contatti.email}</li>
            </ul>
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