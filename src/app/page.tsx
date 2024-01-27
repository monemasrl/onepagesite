import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import logo from "../../public/image/stolebucks.jpg";
import Drawer from "./components/drawer";
import { LuPhoneCall, LuFacebook, LuInstagram, LuMail } from "react-icons/lu";
import { ContextProvider } from "./context/context";
import avatar from "../../public/image/avatar.webp";
import { Tstaff } from "./types/types";
import AnimatedWrapper from "./components/animatedWrapper";

const fakeData = {
  name: "Ditta Splendida",
  titolo_testo_societa: "la nostra storia",
  testo_societa:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum, voluptatibus, quia voluptas quibusdam quos voluptatem quod quae doloribus voluptates doloremque. Quisquam, voluptatum, voluptatibus, quia voluptas quibusdam quos voluptatem quod quae doloribus voluptates doloremque.",
  sede: "Via Roma 1",
  cap: "00100",
  citta: "Roma",
  dati_societari: "p.iva 123456789",
  capitale: "€ 100.000,00",
  contatti: {
    telefono: "06 1234567",
    email: "ditta@gmail.com",
  },
  social: {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
  },
  main_image: {
    url: "https://picsum.photos/seed/as/500",
    alt: "placeholder",
  },
  logo: {
    url: logo,
    alt: "placeholder",
  },
  background_image: {
    url: "https://picsum.photos/seed/picsum/1920/1080",
    alt: "placeholder",
  },
  staff: [
    {
      id: 1,
      email: "pippo@pippo.it",
      password: "123",
      name: "Pippo",
      role: "CEO",
      avatar: avatar,
    },
    {
      id: 2,
      email: "pluto@pluto.it",
      password: "123",
      name: "Pluto",
      role: "Amministratore delegato",
      avatar: avatar,
    },
    {
      id: 3,
      email: "paperino@paperino.it",
      password: "123",
      name: "Paperino",
      role: "Reparto commerciale",
      avatar: avatar,
    },
    {
      id: 4,
      email: "nonnapapera@nonnalit",
      password: "123",
      name: "NonnaPapera",
      role: "Assistenza tecnica",
      avatar: avatar,
    },
  ],
};

export default function Home() {
  const staff: Tstaff[] = fakeData.staff;

  return (
    <div className={styles.main}>
      <Image
        src={fakeData.background_image.url}
        alt={fakeData.background_image.alt}
        width={1990}
        height={1080}
        className={styles.background}
      />{" "}
      <ContextProvider>
        <div className={styles.wrapper}>
          <AnimatedWrapper logo={fakeData.logo} />
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
          <Drawer staff={staff} />
        </div>
      </ContextProvider>
    </div>
  );
}
