import style from "./components.module.scss";
import map from "../../../public/image/map.jpg";
import mapBlur from "../../../public/image/map-blur.jpg";
import LoadImage from "./loadImage";

function Footer() {
  return (
    <footer className={style.footer}>
      <LoadImage src={map} alt="map" width={1000} height={300} />
    </footer>
  );
}
export default Footer;
