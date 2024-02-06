import style from "./components.module.scss";
import Image from "next/image";
import map from "../../../public/image/map.jpg";
function Footer() {
  return (
    <footer className={style.footer}>
      <Image src={map} alt="map" width={1000} height={300} />
    </footer>
  );
}
export default Footer;
