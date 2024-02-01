import styles from "./page.module.scss";
import logo from "../../public/image/stolebucks.jpg";
import { ContextProvider } from "./context/context";
import avatar from "../../public/image/avatar.webp";
import { Tstaff } from "./types/types";

import MainContent from "./components/mainContent";
const fakeData = {
  name: "Ditta Splendida",
  titolo_testo_societa: "la nostra storia",
  testo_societa:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum, voluptatibus, quia voluptas quibusdam quos voluptatem quod quae doloribus voluptates doloremque. Quisquam, voluptatum, voluptatibus, quia voluptas quibusdam quos voluptatem quod quae doloribus voluptates doloremque.",
  sede: "Via Sgargabonzi 1",
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
  background: {
    url: "https://picsum.photos/seed/picsum/1920/1080",
    alt: "placeholder",
    type: "image",
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
  return (
    <div className={styles.main}>
      <ContextProvider>
        <>
          {" "}
          <MainContent fakeData={fakeData} />
        </>
      </ContextProvider>
    </div>
  );
}
