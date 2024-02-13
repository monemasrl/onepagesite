"use client";
import styles from "./components.module.scss";
import LoadImage from "./loadImage";
import { LuPhone, LuMail } from "react-icons/lu";
import { GoArrowLeft, GoArrowRight, GoHome } from "react-icons/go";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { type ItemsSitesStaff } from "../generated2/models/ItemsSitesStaff";
import { type StaticImageData } from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
type TitemSitesStaff = ItemsSitesStaff & { image: string | StaticImageData };

function StaffData({
  data,
}: {
  data: {
    data: TitemSitesStaff;
    next: { slug: string; name: string } | undefined;
    prev: { slug: string; name: string } | undefined;
  };
}) {
  const { firstname, lastname, department, email, phone, image } = data.data;
  const router = useRouter();
  const [nav, setNav] = useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.6,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className={styles.staffData}
      onMouseOver={() => setNav(true)}
      onMouseOut={() => setNav(false)}
    >
      <div
        onClick={() => {
          router.push("/");
        }}
        className={styles.staffData__backHome}
      >
        <GoHome />
      </div>
      <div className={styles.staffData__data}>
        <motion.h3
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          {firstname} {lastname}
        </motion.h3>
        <motion.div
          className={styles.staffData__data__ruolo}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          {department}
        </motion.div>
        <motion.ul
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
        >
          {email && (
            <li>
              {" "}
              <span>{email}</span> <LuMail />
            </li>
          )}
          {phone && (
            <li>
              <span>{phone}</span>
              <LuPhone />
            </li>
          )}
        </motion.ul>
      </div>
      <div className={styles.staffData__imageWrapper}>
        {" "}
        {image && process.env.NEXT_PUBLIC_URL_ASSET && (
          <LoadImage
            src={process.env.NEXT_PUBLIC_URL_ASSET + "/" + image}
            alt={lastname}
            width={100}
            height={100}
          />
        )}
      </div>
      <AnimatePresence>
        {nav && (
          <motion.nav
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.div
              initial={{
                y: 30,
              }}
              animate={{
                y: 0,
              }}
              exit={{
                y: 30,
              }}
              className={`${styles.itemStaff} ${styles.prev}`}
            >
              {data.prev?.slug && (
                <button
                  onClick={() => data.prev && router.push(data.prev.slug)}
                >
                  <GoArrowLeft />{" "}
                  <span>{data.prev.name != undefined && data.prev.name}</span>
                </button>
              )}{" "}
            </motion.div>
            <motion.div
              initial={{
                y: 30,
              }}
              animate={{
                y: 0,
              }}
              exit={{
                y: 30,
              }}
              className={`${styles.itemStaff} ${styles.next}`}
            >
              {data.next?.slug && (
                <button
                  onClick={() => data.next && router.push(data.next.slug)}
                >
                  <span>{data.next.name != undefined && data.next.name}</span>{" "}
                  <GoArrowRight />
                </button>
              )}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
export default StaffData;
