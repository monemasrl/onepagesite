"use client";

import style from "./components.module.scss";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { fetchMapData } from "../api/getData";

const Mappa = dynamic(() => import("./map"));

function Footer({ address }: { address: string }) {
  const [mapdata, setMapdata] = useState<any | undefined>([]);
  const [error, setError] = useState("robe strane");

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

  return (
    <footer className={style.footer}>
      {mapdata.length > 0 ? (
        <Mappa
          position={[parseFloat(mapdata[0].lat), parseFloat(mapdata[0].lon)]}
          zoom={13}
        />
      ) : (
        <div
          style={{ height: "100%", textAlign: "center", paddingTop: "2rem" }}
        >
          {error ? "Errore nel caricamento dati mappa" : "Loading..."}
        </div>
      )}
    </footer>
  );
}
export default Footer;
