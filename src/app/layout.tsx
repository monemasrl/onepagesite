import { League_Spartan } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import styles from "./page.module.scss";

type Tbackground = {
  url: string;
  alt: string;
  type: "image" | "video";
};

const background: Tbackground = {
  url: "pexels_videos_2325093.mp4",
  alt: "immagine di sfondo",
  type: "video",
};

const main = League_Spartan({
  subsets: ["latin"],
  weight: ["600", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={main.className}>
        {background.type === "image" ? (
          <Image
            src={background.url}
            alt={background.alt}
            width={1990}
            height={1080}
            className={styles.background}
          />
        ) : (
          <video className={styles.video} preload="true" autoPlay loop muted>
            <source src={background.url} type="video/mp4" />
          </video>
        )}
        {children}
      </body>
    </html>
  );
}
