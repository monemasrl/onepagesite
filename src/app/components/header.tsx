"use client";
type THeader = {
  logo?: Files | null | undefined;
  name?: string | null | undefined;
};

import style from "./components.module.scss";
import Image, { StaticImageData } from "next/image";
import { useContext } from "react";
import { Context } from "../context/context";
import { Files } from "../generated2/models/Files";

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
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m25 38c-5.1 0-9.7-3-11.8-7.6l1.8-.8c1.8 3.9 5.7 6.4 10 6.4 6.1 0 11-4.9 11-11s-4.9-11-11-11c-4.6 0-8.5 2.8-10.1 7.3l-1.9-.7c1.9-5.2 6.6-8.6 12-8.6 7.2 0 13 5.8 13 13s-5.8 13-13 13z'/%3E%3Cpath d='m20 22h-8v-8h2v6h6z'/%3E%3C/svg%3E"
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
