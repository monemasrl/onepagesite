"use client";
import styles from "./components.module.scss";
import LoadImage from "./loadImage";
import { LuPhone, LuMail } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { type ItemsSitesStaff } from "../generated2/models/ItemsSitesStaff";
import { type StaticImageData } from "next/image";

type TitemSitesStaff = ItemsSitesStaff & { image: string | StaticImageData };

function StaffData({ data }: { data: TitemSitesStaff }) {
  const { firstname, lastname, department, email, phone, image } = data;
  const router = useRouter();

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
    >
      <div
        onClick={() => {
          router.push("/");
        }}
        className={styles.staffData__backHome}
      >
        <GoArrowLeft />
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
              <LuMail /> <span>{email}</span>
            </li>
          )}
          {phone && (
            <li>
              <LuPhone />
              {phone}
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
    </motion.div>
  );
}
export default StaffData;
