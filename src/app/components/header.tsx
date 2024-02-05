"use client";
type THeader = {
  logo?: Files | null | undefined;
  name?: string | null | undefined;
};

import style from "./components.module.scss";
import Image, { StaticImageData } from "next/image";
import { useContext } from "react";
import { Context } from "../context/context";
import { Files } from "@/generated2";

function Header({ logo, name }: THeader) {
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
  return (
    <header className={style.header}>
      {(logo || name) && (
        <div className={style.header__name}>
          {logo && (
            <Image
              src={`https://cmdb.service.monema.dev/assets/${logo.filename_disk}`}
              alt={logo.description || "imageLogo"}
              width={100}
              height={100}
            />
          )}
          <h2>{name}</h2>
        </div>
      )}
      <nav>
        <ul>
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
