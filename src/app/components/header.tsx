type THeader = {
  logo: { url: StaticImageData; alt: string };
  name: string;
};

import style from "./components.module.scss";
import Image, { StaticImageData } from "next/image";

function Header({ logo, name }: THeader) {
  return (
    <header className={style.header}>
      <div className={style.header__name}>
        <Image src={logo.url} alt={logo.alt} width={100} height={100} />
        <h2>{name}</h2>
      </div>
      <nav>
        <ul>
          <li>Staff</li>
          <li>Contatti</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
