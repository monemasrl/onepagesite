"use client";
import styles from "../page.module.scss";
import Header from "./header";
import Footer from "./footer";
import Drawer from "./drawer";
import { LuPhoneCall, LuFacebook, LuInstagram, LuMail } from "react-icons/lu";
import Image from "next/image";
import { type TfakeData } from "../types/types";
import AnimatedWrapper from "./animatedWrapper";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function MainContent({ fakeData }: { fakeData: TfakeData }) {
  const [hideInitial, setHideInitial] = useState(true);
  return (
    <>
      <AnimatedWrapper
        logo={fakeData.logo}
        name={fakeData.name}
        sede={fakeData.sede}
        contatti={fakeData.contatti}
        citta={fakeData.citta}
        hideInitial={hideInitial}
        setHideInitial={setHideInitial}
      />
      <AnimatePresence>
        {!hideInitial && (
          <motion.div
            className={styles.wrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Header logo={fakeData.logo} name={fakeData.name} />
            <main className={styles.content}>
              <section className={styles.content__intro}>
                <Image
                  src={fakeData.main_image.url}
                  alt={fakeData.main_image.alt}
                  width={500}
                  height={500}
                />
                <div className={styles.content__intro__data}>
                  <h2>{fakeData.titolo_testo_societa}</h2>
                  <p>{fakeData.testo_societa}</p>
                </div>
              </section>
              <section className={styles.content__dati}>
                <ul>
                  <li>
                    <h4>Sede</h4>
                    <p>{fakeData.sede}</p>
                    <p>
                      {fakeData.cap}, {fakeData.citta}
                    </p>
                  </li>
                  <li>
                    <h4>Dati Societari</h4>
                    <p>{fakeData.dati_societari}</p>
                    <p>capitale: {fakeData.capitale}</p>
                  </li>
                  <li>
                    <h4>Contatti</h4>
                    <p>
                      <span>
                        <LuPhoneCall />
                      </span>
                      {fakeData.contatti.telefono}
                    </p>
                    <p>
                      <span>
                        <LuMail />
                      </span>
                      {fakeData.contatti.email}
                    </p>
                  </li>
                  <li>
                    <h4>Seguici</h4>
                    <p>
                      <span>
                        <LuFacebook />{" "}
                      </span>
                      <a
                        href={fakeData.social.facebook}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Facebook
                      </a>
                    </p>
                    <p>
                      {" "}
                      <span>
                        <LuInstagram />{" "}
                      </span>
                      <a
                        href={fakeData.social.instagram}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Instagram
                      </a>
                    </p>
                  </li>
                </ul>
              </section>
            </main>
            <Footer />
            <Drawer staff={fakeData.staff} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MainContent;
