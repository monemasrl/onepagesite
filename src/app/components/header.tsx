"use client";
type THeader = {
  logo: { url: StaticImageData; alt: string };
  name: string;
};

import style from "./components.module.scss";
import Image, { StaticImageData } from "next/image";
import { useContext } from "react";
import { Context } from "../context/context";

function Header({ logo, name }: THeader) {
  const data = useContext(Context);

  return (
    <header className={style.header}>
      <div className={style.header__name}>
        <Image src={logo.url} alt={logo.alt} width={100} height={100} />
        <h2>{name}</h2>
      </div>
      <nav>
        <ul>
          <li onClick={() => data?.setDrawer(true)}>Staff</li>
          <li>Contatti</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
