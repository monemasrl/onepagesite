"use client";
type THeader = {
  logo?: Files | null | undefined;
  name?: string | null | undefined;
  social?: Tsocial[];
};
type Tsocial = {
  address: string;
  type: string;
};
type TsocialIcons = {
  [key: string]: JSX.Element;
};
import style from "./components.module.scss";
import { useContext } from "react";
import { Context } from "../context/context";
import { Files } from "../generated2/models/Files";
import LoadImage from "./loadImage";
import { LuFacebook, LuInstagram, LuTwitter, LuLinkedin } from "react-icons/lu";

function Header({ logo, name, social }: THeader) {
  const data = useContext(Context);

  function setDrawer(
    dataType: string,
    setDrawer?: React.Dispatch<React.SetStateAction<boolean>>,
    setData?: React.Dispatch<React.SetStateAction<string | null>>
  ) {
    if (setDrawer && setData) {
      setDrawer(true);
      setData(dataType);
    } else {
      console.log("setDrawer and setData are undefined");
    }
  }

  const socialIcons: TsocialIcons = {
    facebook: <LuFacebook />,
    instagram: <LuInstagram />,
    twitter: <LuTwitter />,
    linkedin: <LuLinkedin />,
  };

  return (
    <header className={style.header}>
      {(logo || name) && (
        <div className={style.header__name}>
          {logo && (
            <LoadImage
              src={`https://cmdb.service.monema.dev/assets/${logo.filename_disk}`}
              alt={name || "logo"}
              width={100}
              height={100}
            />
          )}

          <h2>{name}</h2>
        </div>
      )}
      <nav>
        {social && (
          <ul className={style.social}>
            {social.map((social: Tsocial, index: number) => (
              <li key={index}>
                <a
                  href={social.address}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <span>{socialIcons[social.type]}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
        <ul className={style.mainNav}>
          <li
            onClick={() =>
              setDrawer("STAFF", data?.setDrawer, data?.setDataDrawer)
            }
          >
            Staff
          </li>
          <li
            onClick={() =>
              setDrawer("CONTATTI", data?.setDrawer, data?.setDataDrawer)
            }
          >
            Contatti
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
