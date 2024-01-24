import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import logo from "../../public/image/stolebucks.jpg";
const fakeData = {
  name: "ditta splendida",
  testo_societa:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  sede: "via roma 1",
  cap: "00100",
  citta: "roma",
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
    url: "https://via.placeholder.com/150",
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
};

export default function Home() {
  return (
    <div className={styles.main}>
      <Image
        src={fakeData.background_image.url}
        alt={fakeData.background_image.alt}
        layout="fill"
        objectFit="cover"
        className={styles.background}
      />
      <div className={styles.wrapper}>
        <Header logo={fakeData.logo} name={fakeData.name} />
        <main className={styles.content}>content</main>
        <Footer />
      </div>
    </div>
  );
}
