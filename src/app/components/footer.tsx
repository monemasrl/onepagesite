"use client";

import style from "./components.module.scss";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { fetchMapData } from "../api/getData";

const Mappa = dynamic(() => import("./map"));

function Footer({ address }: { address: string }) {
  const [mapdata, setMapdata] = useState<any | undefined>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data: any = await fetchMapData(address);
      if (data) {
        setMapdata(data);
      } else {
        setError(data.error);
      }
    }
    if (address.length) {
      fetchData();
    }
  }, [address]);

  console.log(mapdata, "mapdata");
  return mapdata.length > 0 ? (
    <footer className={style.footer}>
      <Mappa
        position={[parseFloat(mapdata[0].lat), parseFloat(mapdata[0].lon)]}
        zoom={13}
      />
    </footer>
  ) : (
    <div>{error ? "Errore nel caricamento dati mappa" : "Loading..."}</div>
  );
}
export default Footer;
